import React from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  outerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "red",
    height: 200,
  },
});

export default Styles;
