//import liraries
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MyApi from "../Api/MyApi";
import MyReturns from "../HomeScreen/Components/Primary";
import NullHourlyTimeline from "./Components/HourlyUpdates";
import WeeklyForecast from "./Components/WeeklyForecast";
import FlatListComponent from "./Components/WeeklyForecastFlatList/FlatlistItem";
import Graph from "./Components/Graph";

const { width, height } = Dimensions.get("window");

//function to get height and width of a view

// create a component
const Home = () => {
  const [sevenDaysData, setSevenDaysData] = useState(true);
  var [forecastWeather, setForecastWeather] = useState(null);
  var [loading, setLoading] = useState(false);

  const getAllDayForecast = async () => {
    setLoading(true);
    const response = await MyApi.AllDayForcast();
    setForecastWeather(response);
    setLoading(false);
  };
  const getSevenDayForecast = async () => {
    setLoading(true);
    const response = await MyApi.SevenDaysForecast();
    setSevenDaysData(response);
    setLoading(false);
  };

  useEffect(() => {
    getAllDayForecast();
    getSevenDayForecast();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#0D0720",
        }}
      >
        <ActivityIndicator size="large" color="#3c0385" />
      </View>
    );
  } else {
    return (
      <SafeAreaView
        style={{ height: "100%", width: "100%", backgroundColor: "#0D0720" }}
      >
        <ScrollView style={styles.container}>
          <MyReturns weather={forecastWeather} />
          <NullHourlyTimeline weather={forecastWeather} />
          <WeeklyForecast weather={sevenDaysData} />
          <Graph data={sevenDaysData} />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0720",
  },
});

//make this component available to the app
export default Home;
