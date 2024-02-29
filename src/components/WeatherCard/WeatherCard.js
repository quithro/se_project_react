import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
    const { CurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
    const weatherOption = weatherOptions.find((item) => {
        return item.day === day && item.type === type;
    });

    if (weatherOption) {
        const weatherOptionUrl = weatherOption.url || "";
        return (
            <section className="weather" id="weather">
                <div className="weather__info">{weatherTemp} °{CurrentTemperatureUnit}</div>
                <img className="weather__image" src={weatherOptionUrl} alt="weather image" />
            </section>
        );
    } else {
        return null;
    }
}

export default WeatherCard;