import jwt from "jsonwebtoken";
import "dotenv/config";
import { refreshTokens } from "../models/data.js";
import { generateAccessToken } from "../utils/generateAccessToken.js";

export const refreshToken = (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.send(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return sendStatus(403);

    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
};
