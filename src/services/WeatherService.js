import axios from "axios";

const getWeather = async () => {
  const data = (
    await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=cairo&cnt=7&units=metric&appid=${process.env.REACT_APP_FORECAST_API_KEY}`
    )
  ).data;

  return mapToDomain(data);
};

function mapToDomain(data) {
  const weather = [];
  data.list.forEach((day) => {
    console.log(day);
    weather.push({
      sunrise: day.sunrise,
      sunset: day.sunset,
      temp: day.temp.day,
      humidity: day.humidity,
      pressure: day.pressure,
    });
  });
  return {
    city: data.city.name,
    country: data.city.country,
    timezone: data.city.timezone,
    weather: weather,
  };
}
const WeatherService = {
  getWeather,
};

export default WeatherService;
