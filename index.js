import express from "express";
import bodyParser from "body-parser";

import "dotenv/config";

import { userSignup } from "./controller/signup.js";
import { userLogin } from "./controller/login.js";
import { fetchPost } from "./controller/posts.js";
import { authenticateToken } from "./utils/authenticateToken.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to JWT Signup/Signin App");
});

// User Signup
app.post("/signup", userSignup);

// User Login
app.post("/login", userLogin);

// View posts
app.get("/posts", authenticateToken, fetchPost);

app.listen(PORT, () => {
  console.log(`APP listening on PORT ${PORT}`);
});
