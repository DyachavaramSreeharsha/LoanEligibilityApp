import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailRow({ label, value }: any) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 10,
  },

  label: {
    color: "#6B7280",
    fontSize: 14,
  },

  value: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
});