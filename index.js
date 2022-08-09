import express from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import mysql from "mysql2";
import jsonwebtoken from "jsonwebtoken";

import "dotenv/config";

const PORT = process.env.PORT;
const app = express();

app.use("/", (req, res) => {
  res.send("Welcome to JWT Signup/Signin App");
});

app.listen(PORT, () => {
  console.log(`APP listening on PORT ${PORT}`);
});
