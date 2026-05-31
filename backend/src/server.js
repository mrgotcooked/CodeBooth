import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";//Node.js module used for file/folder paths.
import { connectDB } from "./lib/db.js";
import {serve} from "inngest/express"
import cors from "cors"
import { inngest,functions } from "./lib/inngest.js";
import { chatClient } from "./lib/stream.js";
const app = express();

const __dirname = path.resolve();//gives current project root path
//C:\Users\advit\OneDrive\ドキュメント\mock-interview project\backend

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
//credentials?server allows browser to include cookies on request
app.use("/api/inngest",serve({client:inngest,functions}))
// API route
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "success from api now hehhe",
  });
});
// app.get("/api/test-stream-users", async (req, res) => {
//   const { users } = await chatClient.queryUsers({});
//   res.json(users);
// });

connectDB().then(()=>{
  app.listen(ENV.PORT, () =>//starting server
  console.log(`server is running on port ${ENV.PORT}`)  
); 
})
