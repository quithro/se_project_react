import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, cards }) {
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

    const filteredCards = cards.filter((item) => {
        return item?.weather.toLowerCase() === weatherType;
    });

    const weatherType = getWeatherType();

    return (
        <main className="main">
            <WeatherCard 
                day={true} 
                type="cloudy" 
                weatherTemp={weatherTemp} 
                currentTemp={currentTemp}
            />
            <section 
                className="card__section" 
                id="card-section">
                    Today is {`${currentTemp}°${currentTemperatureUnit}`} / You may want to wear:
                <div className="card__items">
                    {filteredCards.map((item) => {
                        return (
                            <ItemCard 
                                key={item._id} 
                                item={item} 
                                onSelectCard={onSelectCard} 
                            />
                        );    
                    })}
                </div>
            </section>
        </main>
    );
}

export default Main;