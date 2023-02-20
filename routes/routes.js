import express from "express";
import Blog from "../model/Blog.js";

const router = express.Router();

// const article = new Blog({
//   title: 'Awesome Post!',
//   slug: 'awesome-post',
//   published: true,
//   content: 'This is the best post ever',
//   tags: ['featured', 'announcement'],
// })

// await article.save();

// const findArticle = await Blog.findOne({});
// console.log(findArticle);

router.get("/", (req, res) => {
  res.send("This is api Router!");
})

export default router;
