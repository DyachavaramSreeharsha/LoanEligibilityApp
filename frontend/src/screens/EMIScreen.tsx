import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";

export default function EMIScreen({ navigation, route }: any) {
  const { loanAmount, tenure, interestRate } = route.params || {};

  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    fetch("http://10.0.2.2:5100/api/loan/calculate-emi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loan_amount: loanAmount,
        interest_rate: interestRate,
        tenure: tenure,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMonthlyEmi(data.monthly_emi);
        setTotalInterest(data.total_interest);
        setTotalPayment(data.total_payment);
      })
      .catch(() => {
        Alert.alert("Error", "Unable to calculate EMI");
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScreenTitle title="EMI Details" />

      <InfoCard>
        <Text style={styles.label}>
          Monthly EMI
        </Text>

        <Text style={styles.value}>
          {monthlyEmi.toLocaleString()}
        </Text>

        <Text style={styles.label}>
          Total Interest
        </Text>

        <Text style={styles.value}>
          {totalInterest.toLocaleString()}
        </Text>

        <Text style={styles.label}>
          Total Repayment Amount
        </Text>

        <Text style={styles.value}>
          {totalPayment.toLocaleString()}
        </Text>
      </InfoCard>

      <CustomButton
        title="View Credit Score"
        onPress={() => navigation.navigate("Credit Score")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
    justifyContent: "center",
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 15,
  },

  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 5,
  },
});