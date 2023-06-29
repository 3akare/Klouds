export const getWeather = async () => {
  let city = window.localStorage.getItem("location");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=1dff06585ef540ec911191150222603&q=${
    city ? city : "london"
  }&days=7&aqi=yes&alerts=no`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const weatherData = await getWeather();
