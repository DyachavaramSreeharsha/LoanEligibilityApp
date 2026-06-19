import { Router } from "express";

import {
  checkEligibility,
  calculateEmi,
} from "../controllers/loanController";

const router = Router();

router.post(
  "/check-eligibility",
  checkEligibility
);

router.post(
  "/calculate-emi",
  calculateEmi
);

export default router;