import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";

export default function SuccessScreen({ navigation }: any) {
  const applicationId = "APP001";
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <ScreenTitle title="Success" />

      <Text style={styles.subtitle}>
        Your loan application has been submitted successfully.
      </Text>

      <InfoCard>
        <Text style={styles.label}>
          Application ID
        </Text>

        <Text style={styles.value}>
          {applicationId}
        </Text>

        <Text style={styles.label}>
          Submitted Date
        </Text>

        <Text style={styles.value}>
          {currentDate}
        </Text>
      </InfoCard>

      <CustomButton
        title="Back to Home"
        onPress={() => navigation.navigate("Login")}
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

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 5,
  },
});