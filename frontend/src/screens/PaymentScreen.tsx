import React from "react";
import { View, Alert } from "react-native";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";

import { createOrder } from "../api/paymentApi";

import RazorpayCheckout from 'react-native-razorpay';

export default function PaymentScreen({ navigation }: any) {
  const handlePayment = async () => {
    try {
      const orderRes = await createOrder(1999);

      const order = orderRes.data;

      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: "Loan Finance App",
        description: "Processing Fee",
        order_id: order.order_id,

        prefill: {
          name: "Sreeharsha",
          email: "test@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#3399cc",
        },
      };

      const response =
        await RazorpayCheckout.open(options);

      navigation.navigate("Success", {
        paymentId:
          response.razorpay_payment_id,
        loanAmount: 500000,
        emi: 15000,
        tenure: 36,
        creditScore: 750,
        timestamp:
          new Date().toISOString(),
      });
    } catch (error: any) {
      console.log("Payment Error:", error);

      if (error?.code === 0) {
        Alert.alert(
          "Payment Cancelled",
          "You cancelled the payment."
        );
      } else {
        Alert.alert(
          "Payment Failed",
          error?.description ||
            "Something went wrong"
        );
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <ScreenTitle title="Payment" />

      <InfoCard>
      </InfoCard>

      <CustomButton
        title="Pay Processing Fee"
        onPress={handlePayment}
      />
    </View>
  );
}