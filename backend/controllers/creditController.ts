import { Request, Response } from "express";
import { calculateCreditScore } from "../utils/creditScore";

export const getCreditScore = (
  req: Request,
  res: Response
): void => {
  const salary = Number(req.query.salary) || 80000;
  const liabilities =
    Number(req.query.liabilities) || 10000;

  const {
    creditScore,
    riskLevel,
    approvalChance,
  } = calculateCreditScore(
    salary,
    liabilities
  );

  res.status(200).json({
    credit_score: creditScore,
    risk_level: riskLevel,
    loan_approval_chance: approvalChance,
  });
};