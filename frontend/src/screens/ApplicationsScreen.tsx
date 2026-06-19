import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ScreenTitle from "../components/ScreenTitle";
import InfoCard from "../components/InfoCard";

const applications = [
  {
    id: "LA2026001",
    amount: "500000",
    status: "Under Review",
    date: "15 Jun 2026",
  },
  {
    id: "LA2025008",
    amount: "200000",
    status: "Approved",
    date: "10 Jun 2026",
  },
];

export default function ApplicationsScreen() {
  return (
    <View style={styles.container}>
      <ScreenTitle title="My Applications" />

      <FlatList
        data={applications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InfoCard>
            <Text style={styles.id}>{item.id}</Text>

            <Text style={styles.text}>
              Loan Amount: {item.amount}
            </Text>

            <Text style={styles.text}>
              Status: {item.status}
            </Text>

            <Text style={styles.text}>
              Date: {item.date}
            </Text>
          </InfoCard>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
  },

  id: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    color: "#4B5563",
    marginBottom: 6,
  },
});