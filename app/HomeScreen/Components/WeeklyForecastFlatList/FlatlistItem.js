//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";

const { width, height } = Dimensions.get("window");

//function to convert date_epoch into day
function getDay(date_epoch) {
  var date = new Date(date_epoch * 1000);
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
}

// create a component
const FlatListComponent = ({ item }) => {
  const {
    maxtemp_c,
    daily_chance_of_rain,
    date,
    date_epoch,
    day,
    day: { condition },
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.bodyText}>{date}</Text>
          <Text style={styles.headingText}>{getDay(date_epoch)}</Text>
          <Text style={styles.subHeadingText}>{condition.text}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.superText}>Avg Temp {day.avgtemp_c}°C </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.miniInfo}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ height: 20, width: 20, marginRight: 5 }}
                  source={require("../../../../assets/rain.png")}
                />
                <Text style={styles.bodyText}>
                  Chances{"\n"}
                  {day.daily_chance_of_rain}%
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ height: 20, width: 20, marginRight: 5 }}
                  source={require("../../../../assets/visibility.png")}
                />
                <Text style={styles.bodyText}>
                  Visibility{"\n"}
                  {day.avgvis_km}km
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ height: 20, width: 20, marginRight: 5 }}
                  source={require("../../../../assets/thermometer.png")}
                />
                <Text style={styles.bodyText}>
                  Min{"\n"}
                  {day.mintemp_c}°C
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ height: 20, width: 20, marginRight: 5 }}
                  source={require("../../../../assets/thermometer.png")}
                />
                <Text style={styles.bodyText}>
                  Max{"\n"}
                  {day.maxtemp_c}°C
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width - 30,
    paddingBottom: 5,
    flex: 1,
    backgroundColor: "#0D0720",
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: 1.5,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 20,
  },
  bodyText: {
    color: "white",
    fontSize: 12,
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  subHeadingText: {
    color: "white",
    fontSize: 16,
    // flexWrap: "wrap",
    marginBottom: 0,
  },
  superText: {
    color: "rgba(255,255,255,0.2)",
    fontSize: 38,
    fontWeight: "bold",
  },

  icon: { height: 20, width: 20 },

  contentContainer: {
    width: "100%",
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 10,
  },
  infoContainer: {
    justifyContent: "space-between",
    padding: 10,
  },

  tempContainer: {
    flex: 3.4,
    // justifyContent: "center",
    alignItems: "flex-end",
    // alignContent: "center",
  },
  miniInfo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // paddingLeft: "15%",
    marginTop: 5,
    marginRight: 5,
    alignContent: "center",
    flexDirection: "row",
  },
});

//make this component available to the app
export default FlatListComponent;
