// import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigator from "./src/Navigator";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
  },
});
