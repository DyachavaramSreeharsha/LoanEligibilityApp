import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

export const createOrder = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("Payment API Hit");

  try {
    const { amount }: { amount: number } = req.body;

    if (!amount) {
      return res.status(400).json({
        message: "Amount is required",
      });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    console.log("Order Created:", order.id);

    return res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.log("RAZORPAY ERROR:", error);

    return res.status(500).json({
      message:
        error?.message ||
        "Failed to create Razorpay order",
    });
  }
};