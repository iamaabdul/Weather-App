//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import LoadingIndicator from "../../ActivityIndicators/LoadingIndicator";
import ForecastItem from "./HourlyForecastFlatlist/ForecastItem";
import HourlyForecast from "./HourlyForecastFlatlist/HourlyForecast";

// create a component
const HourlyTimeLine = ({ weather }) => {
  const {
    forecast: {
      forecastday: [{ hour }],
    },
    forecast: {
      forecastday: [{ astro }],
    },
  } = weather;

  return (
    <View style={styles.container}>
      <View style={styles.timeLine}>
        <View style={styles.ItemContainer}>
          <Text style={styles.Text}>Hourly{"\n"}timeline</Text>
        </View>
        <View style={styles.ItemContainer}>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/sunrise.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>Sun Rise</Text>
              <Text style={styles.mainText}>{astro.sunrise}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/sunset.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>Sun Set</Text>
              <Text style={styles.mainText}>{astro.sunset}</Text>
            </View>
          </View>
        </View>
      </View>
      <HourlyForecast data={hour} />
    </View>
  );
};

const NullHourlyTimeline = ({ weather }) => {
  if (weather == null) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"white"}
        style={{ height: "100%", width: "100%", justifyContent: "center" }}
      />
    );
  }
  return <HourlyTimeLine weather={weather} />;
};

// define your styles
const styles = StyleSheet.create({
  timeLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ItemContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    justifyContent: "center",
    padding: 20,
  },

  Text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  mainText: {
    fontSize: 16,
    color: "white",
  },
  secondaryText: {
    fontSize: 14,
    color: "white",
    fontWeight: "200",
  },
  infoItem: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    // justifyContent: "center",
    paddingLeft: "25%",
    paddingTop: 5,
  },
});

//make this component available to the app
export default NullHourlyTimeline;
