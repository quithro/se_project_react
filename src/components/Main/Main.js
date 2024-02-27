import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
    const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
    const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
    const weatherType = useMemo(() => {
        if (currentTemperatureUnit === 'C') {
            if(temp >= 30) {
                return 'hot';
            } else if (temp >=18 && temp <=29) {
                return 'warm';
            } else if (temp <=17) {
                return 'cold';
            }
        } else {
            if (temp >= 86) {
                return 'hot';
            } else if (temp >= 66 && temp <= 85) {
                return 'warm';
            } else if (temp <= 65) {
                return 'cold';
            }
        }
    }, [weatherTemp, currentTemperatureUnit]);

    const filteredCards = defaultClothingItems.filter((item) => {
        console.log(item);
        return item.weather.toLowerCase() === weatherType;
    });

    console.log(filteredCards);

    return (
        <main className="main">
            <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
            <section className="card__section" id="card-section">
                Today is {temp} F / You may want to wear: 
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