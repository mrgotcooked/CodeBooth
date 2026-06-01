import express from "express";
const router = express.Router();
import { getStreamToken } from "../controllers/chatController";
import { protectRoute } from "../middleware/protectRoute";
router.get("/token",protectRoute,getStreamToken);
export default router