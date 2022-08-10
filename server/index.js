import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import { fetchPost } from "../controller/posts.js";
import { authenticateToken } from "../utils/authenticateToken.js";

const PORT = process.env.FUNC_PORT;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to JWT Signup/Signin App");
});

// View posts
app.get("/posts", authenticateToken, fetchPost);

app.listen(PORT, () => {
  console.log(`APP listening on PORT ${PORT}`);
});
