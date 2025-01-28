import { Router } from "express";
const router = Router();
import * as instituteController from "./instituteController.js"
import { verifyToken } from "../auth/authMiddleware.js";

router.post("/school", verifyToken, instituteController.school);
router.post("/college", verifyToken, instituteController.college);
router.post("/competitive-exam", verifyToken, instituteController.competitiveExam);


export default router;