import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
    console.log("weather card");
    const imageSrc = weatherOptions.filter((i) => {
        console.log(i);
        return i.day === day && i.type === type;
    });
    console.log(imageSrc);
    console.log(imageSrc[0].url);

    const imageSrcUrl = imageSrc[0].url || "";
    return (
        <section className="weather" id="weather">
            <div className="weather__info">{weatherTemp} F</div>
            <img className="weather__image" src={imageSrcUrl} alt="weather image" />
        </section>
    );
};

export default WeatherCard;