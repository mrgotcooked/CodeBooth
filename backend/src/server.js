import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";//Node.js module used for file/folder paths.
import { connectDB } from "./lib/db.js";
import {serve} from "inngest/express"
import cors from "cors"
import { inngest,functions } from "./lib/inngest.js";
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

// deployment setup
if (ENV.NODE_ENV === "production") 
  
//   why?
// Because during deployment:

// frontend is already built
// backend serves frontend files

// But during development:

// Vite runs separately on port 5173
// Express runs separately on 3000
  
  
  {

  app.use(express.static(path.join(__dirname, "../frontend/dist")));//dist? Vite converts React code into optimized HTML/CSS/JS files.
  //express.static? It tells Express: "If browser asks for frontend files, serve them."
//  Example:

// Browser requests:
// assets/index-abc123.js
// Express finds it inside:
// frontend/dist/assets
// and sends it.
  app.get("/{*any}", (req, res) => { //means:for any route not matched above:
    res.sendFile(
      path.resolve(__dirname, "../frontend" , "dist", "index.html")//This sends: frontend/dist/index.html to browser ,{/*go one folder up in frontend */}
    );
  });
}
connectDB().then(()=>{
  app.listen(ENV.PORT, () =>//starting server
  console.log(`server is running on port ${ENV.PORT}`)  
); 
})
