import { createContext, useReducer } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weatherData, dispatch] = useReducer(weatherReducer, {});
  return (
    <WeatherContext.Provider value={{ weatherData, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case weatherActions.getWeather:  
      return action.payload;
    default:
      return state;
  }
};


export const weatherActions = {
  getWeather: "GET_WEATHER",
};
