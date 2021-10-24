import axios from "axios";

const getWeather = async (city) => {
  const dailyWeather = await getDailyWeather(city);
  const hourlyWeather = await getHourlyWeather(city);
  return mapToDomain(dailyWeather, hourlyWeather);
};

async function getDailyWeather(city) {
  const data = (
    await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=${process.env.REACT_APP_FORECAST_API_KEY}`
    )
  ).data;
  return data;
}

async function getHourlyWeather(city) {
  try {
    const data = (
      await axios.get(
        `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&cnt=24&units=metric&appid=${process.env.REACT_APP_FORECAST_API_KEY}`
      )
    ).data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

function mapToDomain(dailyWeather, hourlyWeather) {
  const weather = [];
  dailyWeather.list.forEach((day) => {
    weather.push({
      sunrise: day.sunrise,
      sunset: day.sunset,
      temp: day.temp.day,
      humidity: day.humidity,
      pressure: day.pressure,
      icon: setIcon(day.weather[0].id),
      wind: day.speed,
      clouds: day.clouds,

    });
  });
  const hourly = [];
  hourlyWeather.list.forEach((hour, index) => {
    if (index % 3 == 0) {
      console.log(hour);
      hourly.push({
        dt: hour.dt,
        temp: hour.main.temp,
      });
    }
  });

  return {
    city: dailyWeather.city.name,
    country: dailyWeather.city.country,
    timezone: dailyWeather.city.timezone,
    weather: weather,
    hourlyWeather: hourly,
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
