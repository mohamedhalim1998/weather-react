import { createContext, useReducer } from "react";
import WeatherService from "../services/WeatherService";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const initState = {
    weather: null,
    city: "cairo",
  };
  const [data, dispatch] = useReducer(weatherReducer, initState);
  async function getWeather(city) {
    const data = await WeatherService.getWeather(city);
    dispatch({ type: weatherActions.getWeather, payload: data });
  }
  async function searchCity(city) {
    dispatch({ type: weatherActions.searchCity, payload: city });
    getWeather(city);
  }
  return (
    <WeatherContext.Provider
      value={{
        data,
        provider: {
          getWeather,
          searchCity,
        },
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case weatherActions.getWeather:
      return { ...state, weather: action.payload };
    case weatherActions.searchCity:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export const weatherActions = {
  getWeather: "GET_WEATHER",
  searchCity: "SEARCH_CITY",
};
