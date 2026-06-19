import axios from "axios";

const API_URL = "http://10.0.2.2:5100/api";

export const createOrder = async (amount: number) => {
  const response = await axios.post(
    `${API_URL}/payment/create-order`,
    {
      amount,
    }
  );

  return response;
};