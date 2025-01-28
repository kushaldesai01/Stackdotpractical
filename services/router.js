import { Router } from "express";
const router = Router();
import authRoute from "../modules/auth/authRouter.js";
import instituteRoute from "../modules/institute/instituteRouter.js";

router.use("/auth", authRoute);
router.use("/institute", instituteRoute);

export default router;
