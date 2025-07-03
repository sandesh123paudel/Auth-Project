const express = require("express");
const postRouter = express.Router();
const postContoller = require("../controllers/postController");
const { identifier } = require("../middlewares/identification");

postRouter.get("/all-posts", postContoller.getPosts);
postRouter.get("/single-post", postContoller.singlePost);
postRouter.post("/create-post", identifier, postContoller.createPost);
postRouter.put("/update-post", identifier, postContoller.updatePost);
// postRouter.delete("/delete-post", postContoller.signUp);

module.exports = postRouter;
