import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const LoadingIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView source={require("../../assets/hello.json")} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});

export default LoadingIndicator;
