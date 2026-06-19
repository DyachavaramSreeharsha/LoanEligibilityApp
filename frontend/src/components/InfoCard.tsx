import React from "react";
import { View, StyleSheet } from "react-native";

export default function InfoCard({ children }: any) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },
});