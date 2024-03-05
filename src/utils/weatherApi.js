import { processServerResponse } from "./api";
const APIKey = "b695b456fd83b55a17c5827f6430eeed";
const latitude = 36.993686171254716;
const longitude = -86.4412161845565;

export const getWeatherForcast = () => {
    const weatherApi = fetch(
      ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
    ).then(processServerResponse);
  
    return weatherApi;
  };
  
  export const parseWeatherData = (data) => {
    const main = data.main;
    const temp = main && main.temp;
    const weather = {
      temp: { F: Math.round(temp), C: Math.round(((temp - 32) * 5) / 9) },
    };
    return weather;
  };