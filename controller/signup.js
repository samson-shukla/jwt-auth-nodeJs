import db from "../models/db.js";

export const userSignup = (req, res) => {
  const { username, email, password } = req.body;
  res.send(
    `User signup service called with username ${username}, email ${email}, password ${password}`
  );
};
