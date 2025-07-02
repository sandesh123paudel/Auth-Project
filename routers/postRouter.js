const express = require("express");
const postRouter = express.Router();
const postContoller = require("../controllers/postController");

postRouter.get("/all-posts", postContoller.getPosts);
// postRouter.get("/single-post", postContoller.signUp);
// postRouter.post("/create-post", postContoller.signUp);
// postRouter.put("/update-post", postContoller.signUp);
// postRouter.delete("/delete-post", postContoller.signUp);

module.exports = postRouter;
