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
      icon: setIcon(day.weather[0].id),
    });
  });
  return {
    city: data.city.name,
    country: data.city.country,
    timezone: data.city.timezone,
    weather: weather,
  };
}

function setIcon(code) {
  if (code >= 200 && code <= 232) {
    return "thunderstorm";
  } else if (code >= 300 && code <= 321) {
    return "rain-mix";
  } else if (code >= 500 && code <= 531) {
    return "rain";
  } else if (code >= 600 && code <= 622) {
    return "snow";
  } else if (code >= 801) {
    return "cloudy";
  } else {
    return "day-sunny";
  }
}
const WeatherService = {
  getWeather,
};

export default WeatherService;
