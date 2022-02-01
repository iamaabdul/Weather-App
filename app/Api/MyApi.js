import Client from "./Client";

const city = "Lahore";

const AllDayForcast = async () => {
  try {
    const response = await Client.get(
      "forecast.json?key=02f25e2a453e43db8d3170237222201&q=" +
        city +
        "&days=1&aqi=no&alerts=no"
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error while gettin All day forcast.", error.message);
    return [];
  }
};

const SevenDaysForecast = async () => {
  try {
    const response = await Client.get(
      "forecast.json?key=02f25e2a453e43db8d3170237222201&q=" +
        city +
        "&days=7&aqi=no&alerts=no"
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error while getting 7 day forecast.", error.message);
    return [];
  }
};

// api.weatherapi.com/v1/forecast.json?key=02f25e2a453e43db8d3170237222201&q=London&days=7&aqi=no&alerts=no

export default { AllDayForcast, SevenDaysForecast };
