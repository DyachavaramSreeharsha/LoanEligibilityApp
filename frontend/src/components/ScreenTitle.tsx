import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ScreenTitle({ title }: any) {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 30,
  },
});