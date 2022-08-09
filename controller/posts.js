import { posts } from "../models/data.js";

export const fetchPost = (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
};
