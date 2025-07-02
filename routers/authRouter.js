const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();
const { identifier } = require("../middlewares/identification");

authRouter.post("/signup", authController.signUp);
authRouter.post("/signin", authController.signIn);
authRouter.post("/signOut", identifier, authController.signOut);
authRouter.patch(
  "/send-verification-code",
  identifier,
  authController.sendVerificationCode
);
authRouter.patch(
  "/verify-verification-code",
  identifier,
  authController.verifyVerificationCode
);
authRouter.patch("/change-password", identifier, authController.changePassword);

authRouter.patch(
  "/send-forgot-password-code",

  authController.sendForgotPasswordCode
);
authRouter.patch(
  "/verify-forgot-password-code",

  authController.verifyForgotPasswordCode
);

module.exports = authRouter;
