import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import { userLogin } from "../controller/login.js";
import { refreshToken } from "../controller/token.js";

const PORT = process.env.AUTH_PORT;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User Login
app.post("/login", userLogin);

// Get token
app.post("/token", refreshToken);

app.listen(PORT, () => {
  console.log(`AUTH listening on PORT ${PORT}`);
});
