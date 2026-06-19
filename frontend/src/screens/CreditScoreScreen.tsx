import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import CustomButton from "../components/CustomButton";
import InfoCard from "../components/InfoCard";
import ScreenTitle from "../components/ScreenTitle";

export default function CreditScoreScreen({ navigation }: any) {
  const [creditScore, setCreditScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState("");
  const [approvalChance, setApprovalChance] = useState("");

  useEffect(() => {
    fetch("http://10.0.2.2:5100/api/user/credit-score")
      .then((res) => res.json())
      .then((data) => {
        setCreditScore(data.credit_score);
        setRiskLevel(data.risk_level);
        setApprovalChance(data.loan_approval_chance);
      })
      .catch(() => {
        Alert.alert("Error", "Unable to fetch credit score");
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScreenTitle title="Credit Score" />

      <InfoCard>
        <View style={styles.scoreCircle}>
          <Text style={styles.score}>
            {creditScore}
          </Text>
        </View>

        <Text style={styles.scoreLabel}>
          Credit Profile
        </Text>

        <View style={styles.row}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>
              Risk Level
            </Text>

            <Text style={styles.value}>
              {riskLevel}
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>
              Approval Chance
            </Text>

            <Text style={styles.value}>
              {approvalChance}
            </Text>
          </View>
        </View>
      </InfoCard>

      <CustomButton
        title="Proceed to Payment"
        onPress={() => navigation.navigate("Payment")}
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

  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 15,
  },

  score: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#2563EB",
  },

  scoreLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoBox: {
    width: "48%",
    backgroundColor: "#F9FAFB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 8,
  },
});