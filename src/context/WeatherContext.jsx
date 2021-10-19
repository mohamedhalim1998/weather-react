import { createContext, useReducer } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const initState = {
    weather: null,
    city: "cairo",
  };
  const [data, dispatch] = useReducer(weatherReducer, initState);

  return (
    <WeatherContext.Provider value={{ data, dispatch }}>
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
