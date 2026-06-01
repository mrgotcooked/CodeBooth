import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";//Node.js module used for file/folder paths.
import { connectDB } from "./lib/db.js";
import {serve} from "inngest/express"
import cors from "cors"
import { inngest,functions } from "./lib/inngest.js";
import { chatClient } from "./lib/stream.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
const app = express();


app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
//credentials?server allows browser to include cookies on request
app.use(clerkMiddleware());//this add auth fields to request object: req.auth()
app.use("/api/inngest",serve({client:inngest,functions}));
app.use("/api/chat",chatRoutes);
// API route
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "success from api now hehhe",
  });
});
//When you pass an array of middleware to Express, it automatically flattens and executes them sequentially


connectDB().then(()=>{
  app.listen(ENV.PORT, () =>//starting server
  console.log(`server is running on port ${ENV.PORT}`)  
); 
})
