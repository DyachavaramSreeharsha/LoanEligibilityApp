export const calculateEMI = (
  loanAmount: number,
  interestRate: number,
  tenure: number
) => {
  const monthlyRate = interestRate / 12 / 100;

  return (
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1)
  );
};