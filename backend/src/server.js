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
import sessionRoutes from "./routes/sessionRoutes.js";
import codeExecutionRoutes from "./routes/codeExecutionRoutes.js";
import http from "http";
import { Server } from "socket.io";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);

app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/execute", codeExecutionRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "success from api now hehhe",
  });
});

// ================= SOCKET.IO =================

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: ENV.CLIENT_URL,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join-session", (sessionId) => {
    socket.join(sessionId);

    console.log(
      `Socket ${socket.id} joined session ${sessionId}`
    );
  });
  socket.on("code-change", ({ sessionId, code }) => {
  socket.to(sessionId).emit("code-change", code);
});
});

// ================= START SERVER =================

connectDB().then(() => {
  server.listen(ENV.PORT, () => {
    console.log(`server is running on port ${ENV.PORT}`);
  });
});