import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
    console.log("weather card");
    const weatherOption = weatherOptions.find((item) => {
        console.log("weather card");
        return item.day === day && item.type === type;
    });

    console.log(weatherOption);
    console.log(weatherOption.url);
    if (weatherOption) {
        const weatherOptionUrl = weatherOption.url || "";
        return (
            <section className="weather" id="weather">
                <div className="weather__info">{weatherTemp} °F</div>
                <img className="weather__image" src={weatherOptionUrl} alt="weather image" />
            </section>
        );
    };
}

export default WeatherCard;