//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import FLatlistItem from "../Components/WeeklyForecastFlatList/FlatlistItem";

//get day with date epoch
const getDay = (epoch) => {
  var date = new Date(epoch * 1000);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};

const NullList = ({ forecast }) => {
  if (forecast == null || forecast.length == 0 || forecast == undefined) {
    return (
      <View style={styles.nullList}>
        <Text style={{ color: "white" }}>No Data Available</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        data={forecast.forecastday}
        renderItem={({ item }) => <FLatlistItem item={item} />}
        horizontal={true}
        keyExtractor={(item) => item.date_epoch}
        pagingEnabled
        // bounces={false}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={1}
        onScrollToIndexFailed={(info) => {
          console.log(info);
        }}
      />
    );
    // <Button title="Get Data" onPress={() => console.log(forecast)} />
  }
};
// create a component
const MyReturn = ({ weather }) => {
  const { forecast } = weather;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text}>Weekly{"\n"}timeline</Text>
      </View>
      <View style={styles.flatlistContainer}>
        <NullList forecast={forecast} />
      </View>
    </View>
  );
};
const WeeklyForecast = ({ weather }) => {
  if (weather == null) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"white"}
        style={{ justifyContent: "center" }}
      />
    );
  }
  return <MyReturn weather={weather} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: "#0D0720",
  },
  Text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});

//make this component available to the app
export default WeeklyForecast;
