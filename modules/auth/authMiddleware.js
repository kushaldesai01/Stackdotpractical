import jwt from "jsonwebtoken";
import { userModel } from "../user/userModel.js";
import { APP } from "../../services/constant.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json("Token required");
    }
    const findUser = await userModel.findOne({ token: token });
    if (!findUser) {
      return res.status(401).json({ message: "Invalid token" });
    }
    try {
      jwt.verify(findUser.token, APP.JWT_KEY);
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.email = findUser.email;
    req.id = findUser._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
