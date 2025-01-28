import { Router } from "express";
const router = Router();
import authRoute from "../modules/auth/authRouter.js";
import instituteRoute from "../modules/institute/instituteRouter.js";

// Authentication router
router.use("/auth", authRoute);
// Institute router
router.use("/institute", instituteRoute);

export default router;
