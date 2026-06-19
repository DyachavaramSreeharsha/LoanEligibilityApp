import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    navigation.navigate("Loan Eligibility");
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title="Loan Eligibility System" />

      <Text style={styles.subHeading}>
        Login to continue
      </Text>

      <InfoCard>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomButton
          title="Login"
          onPress={loginUser}
        />
      </InfoCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F3F4F6",
  },

  subHeading: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});