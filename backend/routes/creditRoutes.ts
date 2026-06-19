import { Router } from "express";
import { getCreditScore } from "../controllers/creditController";

const router = Router();

router.get("/credit-score", getCreditScore);

export default router;