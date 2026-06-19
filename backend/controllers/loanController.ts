import { Request, Response } from "express";
import { calculateEMI } from "../utils/emi";

export const checkEligibility = (
  req: Request,
  res: Response
): Response => {
  const {
    salary,
    existing_emi,
    loan_amount,
    tenure,
  }: {
    salary: number;
    existing_emi: number;
    loan_amount: number;
    tenure: number;
  } = req.body;

  if (
    !salary ||
    existing_emi === undefined ||
    loan_amount === undefined ||
    !tenure
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const interestRate = 11.5;

  const emi = calculateEMI(
    loan_amount,
    interestRate,
    tenure
  );

  const maxEligibleEmi = salary * 0.8;

  const eligible =
    existing_emi + emi < maxEligibleEmi;

  const maxEligibleAmount = eligible
    ? Math.round(loan_amount * 1.3)
    : 0;

  return res.status(200).json({
    eligible,
    max_eligible_amount: maxEligibleAmount,
    interest_rate: interestRate,
  });
};

export const calculateEmi = (
  req: Request,
  res: Response
): Response => {
  const {
    loan_amount,
    interest_rate,
    tenure,
  }: {
    loan_amount: number;
    interest_rate: number;
    tenure: number;
  } = req.body;

  if (
    !loan_amount ||
    !interest_rate ||
    !tenure
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const monthlyEmi = calculateEMI(
    loan_amount,
    interest_rate,
    tenure
  );

  const totalPayment =
    monthlyEmi * tenure;

  const totalInterest =
    totalPayment - loan_amount;

  return res.status(200).json({
    monthly_emi: Math.round(monthlyEmi),
    total_interest: Math.round(totalInterest),
    total_payment: Math.round(totalPayment),
  });
};