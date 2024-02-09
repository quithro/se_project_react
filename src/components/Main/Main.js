import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherTemp, onSelectCard }) {
    function getWeatherType() {
        if (weatherTemp >= 86) {
            return "hot";
        } else if (weatherTemp >= 66 && weatherTemp <=85) {
            return "warm";
        } else if (weatherTemp <= 65) {
            return "cold";
        }
    return [weatherTemp]};

    const weatherType = getWeatherType();

    console.log(weatherType);

    const filteredCards = defaultClothingItems.filter((item) => {
        console.log(item);
        return item.weather.toLowerCase() === weatherType;
    });

    console.log(filteredCards);

    return (
        <main className="main">
            <WeatherCard day={true} type="cloudy" weatherTemp={weatherTemp} />
            <section className="card__section" id="card-section">
                Today is {weatherTemp} F / You may want to wear: 
                <div className="card__items">
                    {filteredCards.map((item, _id) => (
                        <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Main;