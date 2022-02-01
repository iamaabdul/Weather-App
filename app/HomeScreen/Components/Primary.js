//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const { width, height } = Dimensions.get("window");

//function to get just the today day
const getDay = () => {
  const date = new Date();
  const days = [
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
//function to get the current date without year
const getDate = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return date.getDate() + " " + months[date.getMonth()];
};

// create a component
const Primary = ({ weather }) => {
  const {
    location,
    current,
    current: { condition },
    current: {
      condition: { icon },
    },
    forecast: {
      forecastday: [{ day }],
    },
    forecast: {
      forecastday: [{ hour }],
    },
  } = weather;

  let url = `https:${icon}`;

  const [data, setData] = useState([]);

  const getMeData = () => {
    const dataa = [];
    for (let i = 0; i < hour.length; i++) {
      dataa.push(hour[i].temp_c);
    }
    setData(dataa);
  };
  useEffect(() => {
    getMeData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.locationContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/location.png")}
          />
          <Text style={styles.mainText}>{location.name} </Text>
          <Text style={styles.secondaryText}>/ {location.region}</Text>
        </View>
        <View style={styles.temperatureContainer}>
          <Image
            style={{ width: width * 0.2, height: width * 0.2 }}
            source={{
              uri: url,
            }}
          />
          <Text style={{ fontSize: 80, fontWeight: "bold", color: "white" }}>
            {current.temp_c}°
          </Text>
          <Text style={styles.secondaryText}>Celcius</Text>
        </View>

        <View style={styles.weatherContainer}>
          <Text style={{ fontSize: 20, fontWeight: "900", color: "white" }}>
            {condition.text}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.secondaryText}>{getDay()}, </Text>
            <Text style={[styles.secondaryText]}>{getDate()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            marginTop: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#bab5c8",
              borderRadius: 50,
              padding: 10,
            }}
            onPress={() => console.log("pressed")}
          >
            <Image
              style={[styles.icon, { marginRight: 0 }]}
              source={require("../../../assets/settings.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/wind.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>Wind</Text>
              <Text style={styles.mainText}>{current.wind_kph} km/h</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/sunny.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>UV index</Text>
              <Text style={styles.mainText}>{current.uv}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/thermometer.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>Temp</Text>
              <Text style={styles.mainText}>
                min {day.mintemp_c}° {"\n"}max {day.maxtemp_c}°
              </Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/visibility.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>Visibility</Text>
              <Text style={styles.mainText}>{current.vis_km} km</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.icon}
              source={require("../../../assets/rain.png")}
            />
            <View style={styles.infoText}>
              <Text style={styles.secondaryText}>Chances{"\n"}Of Rain</Text>
              <Text style={styles.mainText}>{day.daily_chance_of_rain}%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const MyReturns = ({ weather }) => {
  if (weather === null) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"white"}
        style={{ height: "100%", width: "100%", justifyContent: "center" }}
      />
    );
  } else {
    return <Primary weather={weather} />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  leftContainer: {
    height: height / 2,
    width: width / 2,
    backgroundColor: "#3c0385",
    alignItems: "center",
    borderBottomEndRadius: 20,
  },
  rightContainer: {
    height: height / 2,
    width: width / 2,
    // alignItems: "center",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
    flexWrap: "wrap",
  },
  temperatureContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "28%",
  },
  weatherContainer: {
    marginTop: 10,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  info: {
    flexDirection: "column",

    justifyContent: "space-evenly",
    width: "100%",
    height: "80%",
  },
  infoItem: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    paddingLeft: "30%",
  },
});

//make this component available to the app
export default MyReturns;
