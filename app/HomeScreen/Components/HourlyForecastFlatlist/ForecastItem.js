//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";

const { width, height } = Dimensions.get("window");

const MyReturn = ({ data }) => {
  const { time } = data;

  // Function to remove first 11 characters from the string
  const timing = (str) => {
    var Time = str.substring(11);
    var hours = Number(Time.match(/^(\d+)/)[1]);
    var minutes = Number(Time.match(/:(\d+)/)[1]);
    return (
      (hours > 12 ? hours - 12 : hours) +
      ":" +
      minutes +
      0 +
      (hours >= 12 ? " PM" : " AM")
    );
  };

  //function to get the current hour epoch and compare it with time_epoch
  const getCurrentHour = (time_epoch) => {
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSeconds = date.getSeconds();
    var currentTime = currentHour;
    var currentTimeEpoch = new Date(currentTime).getTime() / 1000;
    if (currentTimeEpoch > time_epoch) {
      return "hello";
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Temperature}>
        <Image
          style={styles.icon}
          source={require("../../../../assets/thermometer.png")}
        />

        <Text style={styles.mainText}>{data.temp_c} C°</Text>
      </View>

      <Text style={styles.secondaryText}>{timing(time)}</Text>
    </View>
  );
};

const ForecastItem = ({ data }) => {
  if (data == null) {
    return null;
  } else {
    return <MyReturn data={data} />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width / 5,
    alignItems: "center",
    // backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 16,
    color: "white",
  },
  secondaryText: {
    marginTop: 10,
    fontSize: 14,
    color: "white",
    fontWeight: "200",
  },
  Temperature: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },

  icon: {
    height: 15,
    width: 15,
    marginRight: 2,
  },
});

//make this component available to the app
export default ForecastItem;
