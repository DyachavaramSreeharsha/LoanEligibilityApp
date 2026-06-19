export const calculateCreditScore = (
  salary: number,
  liabilities: number
) => {
  let creditScore = 750;

  if (salary < 50000) {
    creditScore -= 40;
  }

  if (liabilities > salary * 0.3) {
    creditScore -= 50;
  }

  creditScore = Math.max(
    300,
    Math.min(900, creditScore)
  );

  let riskLevel = "";
  let approvalChance = "";

  if (creditScore >= 750) {
    riskLevel = "Low";
    approvalChance = "High";
  } else if (creditScore >= 650) {
    riskLevel = "Medium";
    approvalChance = "Moderate";
  } else {
    riskLevel = "High";
    approvalChance = "Low";
  }

  return {
    creditScore,
    riskLevel,
    approvalChance,
  };
};