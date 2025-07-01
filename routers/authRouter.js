const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/signup", authController.signUp);
authRouter.post("/signin", authController.signIn);
authRouter.post("/signOut", authController.signOut);
authRouter.patch(
  "/send-verification-code",
  authController.sendVerificationCode
);

module.exports = authRouter;
