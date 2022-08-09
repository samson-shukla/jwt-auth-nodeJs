// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userLogin = (req, res) => {
  const { username, password } = req.body;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
};
