import jwt from "jsonwebtoken";
import "dotenv/config";

const expirationTime = "15s"; // can be changed according to app needs

export const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expirationTime,
  });
};
