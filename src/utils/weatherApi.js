//b695b456fd83b55a17c5827f6430eeed API KEY
//https://api.openweathermap.org/data/2.5/weather?lat=${36.993686171254716}&lon=${-86.4412161845565}&units=imperial&appid=${b695b456fd83b55a17c5827f6430eeed}
//36.993686171254716, -86.4412161845565

import { processServerResponse } from "./utils";

const latitude = 36.993686171254716;
const longitude = -86.4412161845565;
const APIkey = "b695b456fd83b55a17c5827f6430eeed";

export const getForecastWeather = () => {
    const weatherApi = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
    )
        .then(processServerResponse)
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
    return weatherApi;
};
  
export const parseWeatherData = (data) => {
    const main = data.main;
    const temperature = main && main.temp;
  
    const weather = {
        temperature: {
            F: `${Math.round(temperature)}°F`,
            C: `${Math.round(((temperature - 32) * 5) / 9)}°C`,
        },
    };
    console.log(weather);
    return weather;
};