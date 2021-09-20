import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRoutes from "./routes/appRoutes";
import Firebase from "./config/firbase";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
