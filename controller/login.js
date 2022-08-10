// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { refreshTokens } from "../models/data.js";
import "dotenv/config";
import { generateAccessToken } from "../utils/generateAccessToken.js";

export const userLogin = (req, res) => {
  const { username, password } = req.body;
  const user = { name: username };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);

  res.json({ accessToken: accessToken, refreshToken: refreshToken });
};
