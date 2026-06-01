import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String,
        default:""
    },
    clerkId:{ //so that when a user logs in we know which user is it from the clerk dashboard
        type:String,
        required:true
    }
},{timestamps:true});//createdAt,updatedAt field will be added

const User = mongoose.model("User",userSchema); 

export default User;