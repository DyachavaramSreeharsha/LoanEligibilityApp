import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";

export default function EligibilityResultScreen({
  navigation,
  route,
}: any) {
  const { eligible, maxEligibleAmount, interestRate, loanAmount, tenure } =
    route.params || {};

  return (
    <View style={styles.container}>
      <ScreenTitle title="Eligibility Result" />

      <InfoCard>
        <Text
          style={[
            styles.status,
            {
              color: eligible ? "#16A34A" : "#DC2626",
            },
          ]}
        >
          {eligible ? "Loan Eligible" : "Not Eligible"}
        </Text>

        <Text style={styles.label}>
          Maximum Eligible Amount
        </Text>

        <Text style={styles.value}>
          {maxEligibleAmount}
        </Text>

        <Text style={styles.label}>
          Interest Rate
        </Text>

        <Text style={styles.value}>
          {interestRate}% per annum
        </Text>
      </InfoCard>

      <CustomButton
        title="View EMI Details"
        onPress={() =>
          navigation.navigate("EMI Details", {
            loanAmount,
            tenure,
            interestRate,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    padding: 20,
  },

  status: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 15,
  },

  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 5,
  },
});