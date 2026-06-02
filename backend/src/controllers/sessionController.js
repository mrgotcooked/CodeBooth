import { chatClient, streamClient } from "../lib/stream.js";
import  Session  from "../models/Session.js";

export async function createSession(req,res){
    try{
        const {problem,difficulty} = req.body;
        const userId=req.user._id;
        const clerkId=req.user.clerkId;
        if(!problem||!difficulty)
            res.status(400).json({message:"Problem and difficulty are required"});
        //generate a unique stream id for stream video
        const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
        //create session in db
        const session = await Session({problem,difficulty,host:userId,callId});
        //create stream video call
        await streamClient.video.call("default",callId).getOrCreate({
            data:{
                created_by_id:clerkId,
                custom:{problem,difficulty,sessionId:session._id.toString()}
            }
        });
        chatClient.channel("messaging",callId,{
            name:`${problem} Session`,
            created_by_id:clerkId,
            members:{clerkId}
        });
        await channel.create();
        res.status(201).json({session})
    }
    catch(error){
        console.log("Error in create Session  controller:",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}
export async function getActiveSessions(_,res){
    try{
        const sessions = await Session.find({status:"active"}).populate("host","name profileImage email clerkId").sort({createdAt:-1}).limit(20);  
        res.status(200).json({sessions});
        }
    catch(error){
        console.log("Error in getActiveSessions controller:",error.message);
        res.status(500).json({message:"Internal Server error"});

    }
}
export async function getMyRecentSessions(req,res){
    try{
        const userId = req.user._id;
        //get sessions where user is either host or participants
       const sessions = await Session.find({
            status:"completed",
            $or:[{host:userId},{participant:userId}]
        }).sort({createdAt:-1}).limit(20);
        res.status(200).json({sessions});
    }
    catch(error){
        console.log("Error in getMyRecentSessions controller:",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}
export async function getSessionById(req,res){
    try{
        const {id} = req.params;
        const session = await Session.findById(id).populate("host","name clerkId email profileImage").populate("participant","name clerkId email profileImage");
        if(!session) return res.status(404).json({message:"Session not found"});
        res.status(200).json({session})
    }
    catch(error){
        console.log("Error in getSessionById controller:",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}
export async function joinSession(req,res){
    try{
        const {id} = req.params;
        const userId = req.user._id;
        const clerkId = req.user.clerkId;
        const session = await Session.findById(id);
        if(!session) return res.status(404).json({message:"Session not found"});
        if(session.participant) return res.status(404).json({message:"Session is full"})
        session.participant=userId;
        await session.save();
        const channel = chatClient.channel("messaging",session.callId);
        await channel.addMembers([clerkId]);
        res.status(200).json({session});
    }
    catch(error){
        console.log("Error in joinSession controller:",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}
export async function endSession(req,res){
    try{
        const {id} = req.params;
        const userId = req.user._id;
        const session = await findById(id);
        if(!session)
            return res.status(404).json({message:"Session not found"});
        //check if user is host
        if(session.host.toString()!== userId.toString()){
            return res.status(403).json({message:"Only the host can end the session"});
        }
        //check if session is already completed
        if(session.status==="completed")
            return res.status(400).json({message:"Session is already completed"});
        session.status="completed";
        await session.save();
        //delete video calling
        const call = streamClient.video.call("default",session.callId);
        await call.delete({hard:true});
        //delete chat messaging
        const channel = chatClient.channel("messaging",session.callId);
        await channel.delete();
        res.status(200).json({message:"Session ended successfully"});
    }
    catch(error){
        console.log("Error in endSession controller:",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}