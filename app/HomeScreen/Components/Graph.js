//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const temps = (forecast) => {
  if (forecast != null) {
    const { forecastday } = forecast;
    var temp = [];
    for (var i = 0; i < forecastday.length; i++) {
      temp.push(forecastday[i].day.avgtemp_c);
    }
    return temp;
  }
  return [];
};

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

const labels = (forecast) => {
  if (forecast != null) {
    const { forecastday } = forecast;
    var label = [];
    for (var i = 0; i < forecastday.length; i++) {
      //convert date_epoch to day
      var date = new Date(forecastday[i].date_epoch * 1000);
      var date = new Date(forecastday[i].date_epoch * 1000);
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      label.push(days[date.getDay()]);
    }
    return label;
  }
  return [];
};

const NullGraph = (data) => {
  const { forecast } = data;
  if (data == null || data.length == 0 || data == undefined) {
    return (
      <View style={styles.nullList}>
        <Text style={{ color: "white" }}>No Data Available</Text>
      </View>
    );
  } else {
    return (
      <>
        <LineChart
          data={{
            labels: labels(forecast),
            datasets: [
              {
                data: temps(forecast),
              },
            ],
          }}
          withInnerLines={false}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#0D0720",
            backgroundGradientTo: "#0D0720",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  }
};

// create a component
const MyReturn = ({ data }) => {
  const { forecast } = data;

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            marginLeft: 20,
            marginBottom: 20,
          }}
        >
          Weekly{"\n"}temperature{"\n"}graph
        </Text>
        <NullGraph forecast={forecast} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "#2c3e50",
  },
});

const Graph = ({ data }) => {
  if (data == null) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"white"}
        style={{ justifyContent: "center" }}
      />
    );
  }
  return <MyReturn data={data} />;
};
//make this component available to the app
export default Graph;
