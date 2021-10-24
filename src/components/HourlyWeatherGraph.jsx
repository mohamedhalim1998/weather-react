import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { WeatherContext } from "../context/WeatherContext";
import DateService from "../services/DateService";
function HourlyWeatherGraph() {
  const { data } = useContext(WeatherContext);
  const { weather: weatherData } = data;
  const temps = [
    {
      name: "temerature",
      data: weatherData.hourlyWeather.map((hour) => Math.floor(hour.temp)),
    },
  ];
  console.log(temps);
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: weatherData.hourlyWeather
        .map((hour) => hour.temp)
        .map((time) => DateService.formatTime(time * 1000)),
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="p-2">
      <ReactApexChart
        options={options}
        series={temps}
        type="area"
        height={350}
      />
    </div>
  );
}

export default HourlyWeatherGraph;
