import express from "express"
import { signupHandler } from "../controllers/signinController.js";
import { signinhandler } from "../controllers/signincontroller.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", signupHandler)
authRoutes.post("/signin", signinhandler)