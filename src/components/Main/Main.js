import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
    const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
    
    const currentTemp = weatherTemp?.temp?.[currentTemperatureUnit];
    
    const getWeatherType = () => {
        if (currentTemp >= 86) {
          return "hot";
        } else if (currentTemp >= 66 && currentTemp <= 85) {
          return "warm";
        } else if (currentTemp <= 65) {
          return "cold";
        }
      };
    
    const weatherType = getWeatherType();
    const filteredCards = clothingItems.filter((card) => {
        return card?.weather.toLowerCase() === weatherType;
    });    

    return (
        <main className="main">
            <WeatherCard 
                day={true} 
                type="cloudy" 
                weatherTemp={weatherTemp} 
                currentTemp={currentTemp}
            />
            <section className="card__section" id="card-section">
                    Today is {`${currentTemp}°${currentTemperatureUnit}`} / You may want to wear:
                <ul className="card__items">
                    {filteredCards.map((item) => {
                        return (
                            <ItemCard 
                                item={item} 
                                key={item._id} 
                                onSelectCard={onSelectCard} 
                            />
                        );    
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Main;