import express from "express";
import {
  googleSignUp,
  login,
  register,googleSignIn
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/google-signup", googleSignUp);
router.post("/login", login);
router.post("/google-signin",googleSignIn)

export default router;
  