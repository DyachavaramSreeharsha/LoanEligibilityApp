import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import LoanEligibilityScreen from "../screens/LoanEligibilityScreen";
import EligibilityResultScreen from "../screens/EligibilityResultScreen";
import EMIScreen from "../screens/EMIScreen";
import CreditScoreScreen from "../screens/CreditScoreScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SuccessScreen from "../screens/SuccessScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Loan Eligibility"
          component={LoanEligibilityScreen}
          options={{ title: "Loan Eligibility" }}
        />

        <Stack.Screen
          name="Eligibility Result"
          component={EligibilityResultScreen}
          options={{ title: "Eligibility Result" }}
        />

        <Stack.Screen
          name="EMI Details"
          component={EMIScreen}
          options={{ title: "EMI Details" }}
        />

        <Stack.Screen
          name="Credit Score"
          component={CreditScoreScreen}
          options={{ title: "Credit Score" }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: "Application Fee" }}
        />

        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ title: "Application Submitted" }}
        />

        <Stack.Screen
          name="Applications"
          component={ApplicationsScreen}
          options={{ title: "My Applications" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}