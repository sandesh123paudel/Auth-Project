const express = require("express");
const postRouter = express.Router();
const postContoller = require("../controllers/postController");
const { identifier } = require("../middlewares/identification");

postRouter.get("/all-posts", postContoller.getPosts);
// postRouter.get("/single-post", postContoller.signUp);
postRouter.post("/create-post", identifier, postContoller.createPost);
// postRouter.put("/update-post", postContoller.signUp);
// postRouter.delete("/delete-post", postContoller.signUp);

module.exports = postRouter;
