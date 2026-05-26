import express from "express"
import {ENV} from "./lib/env.js"
const app = express();


app.get("/",(req,res)=>{
    res.status(200).json({message:"success from api now hehhe"})
})

app.listen(ENV.PORT,()=>console.log("server is running on port 3000"));
