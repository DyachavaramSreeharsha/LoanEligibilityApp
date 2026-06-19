import axios from "axios";

const API_URL = "http://10.0.2.2:5100/api";

export const checkLoanEligibility = async (
  salary: number,
  existingEmi: number,
  loanAmount: number,
  tenure: number
) => {
  const response = await axios.post(
    `${API_URL}/loan/check-eligibility`,
    {
      salary,
      existing_emi: existingEmi,
      loan_amount: loanAmount,
      tenure,
    }
  );

  return response;
};

export const calculateLoanEmi = async (
  loanAmount: number,
  interestRate: number,
  tenure: number
) => {
  const response = await axios.post(
    `${API_URL}/loan/calculate-emi`,
    {
      loan_amount: loanAmount,
      interest_rate: interestRate,
      tenure,
    }
  );

  return response;
};