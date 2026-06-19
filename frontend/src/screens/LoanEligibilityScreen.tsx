import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";

export default function LoanEligibilityScreen({ navigation }: any) {
  const [fullName, setFullName] = useState("");
  const [salary, setSalary] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [employmentType, setEmploymentType] = useState("Salaried");
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");

  const handleCheckEligibility = async () => {
    if (!fullName || !salary || !existingEmi || !loanAmount || !tenure) {
      Alert.alert("Validation", "Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch(
        "http://10.0.2.2:5100/api/loan/check-eligibility",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            salary: Number(salary),
            existing_emi: Number(existingEmi),
            loan_amount: Number(loanAmount),
            tenure: Number(tenure),
          }),
        }
      );

      const data = await response.json();

      navigation.navigate("Eligibility Result", {
        eligible: data.eligible,
        maxEligibleAmount: data.max_eligible_amount,
        interestRate: data.interest_rate,
        loanAmount: Number(loanAmount),
        tenure: Number(tenure),
      });
    } catch (error) {
      Alert.alert("Error", "Unable to check loan eligibility.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ScreenTitle title="Check Your Loan Eligibility" />

        <Text style={styles.subtitle}>
          Fill in your details to check your loan eligibility.
        </Text>
      </View>

      <InfoCard>
        <Text style={styles.label}>Full Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Monthly Salary</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter monthly salary"
          keyboardType="numeric"
          value={salary}
          onChangeText={setSalary}
        />

        <Text style={styles.label}>Existing Monthly EMI</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter existing EMI"
          keyboardType="numeric"
          value={existingEmi}
          onChangeText={setExistingEmi}
        />

        <Text style={styles.label}>Employment Type</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={employmentType}
            onValueChange={(itemValue) => setEmploymentType(itemValue)}
          >
            <Picker.Item label="Salaried" value="Salaried" />
            <Picker.Item label="Self-Employed" value="Self-Employed" />
          </Picker>
        </View>

        <Text style={styles.label}>Loan Amount Required</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter loan amount"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
        />

        <Text style={styles.label}>Loan Tenure (Months)</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter loan tenure"
          keyboardType="numeric"
          value={tenure}
          onChangeText={setTenure}
        />

        <CustomButton
          title="Check Eligibility"
          onPress={handleCheckEligibility}
        />
      </InfoCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    padding: 20,
    paddingTop: 30,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginTop: 15,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    padding: 14,
    backgroundColor: "#FFFFFF",
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
});