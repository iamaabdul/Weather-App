import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/HomeScreen/Home";
import LoadingIndicator from "./app/ActivityIndicators/LoadingIndicator";
import ForecastItem from "./app/HomeScreen/Components/HourlyForecastFlatlist/ForecastItem";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Home />
      {/* <ForecastItem /> */}

      <StatusBar style="light" enum="slide" />
    </View>
  );
}
