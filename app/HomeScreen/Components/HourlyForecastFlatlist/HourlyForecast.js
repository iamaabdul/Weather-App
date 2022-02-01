//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import ForecastItem from "./ForecastItem";

// create a component
const HourlyForecast = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ForecastItem data={item} />}
        keyExtractor={(data) => data.time}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    // backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default HourlyForecast;
