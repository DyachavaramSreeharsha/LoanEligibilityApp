const API_URL = "http://10.0.2.2:5100/api";

export const getCreditScore = async () => {
  const response = await fetch(
    `${API_URL}/user/credit-score`
  );

  const data = await response.json();

  return data;
};