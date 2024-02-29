import React, { useState, useEffect } from 'react';
import api from "../../utils/api";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from "../Profile/Profile";
import ItemModal from '../ItemModal/ItemModal';
import AddItemModal from '../AddItemModal/AddItemModal';
import { parseWeatherData, getForecastWeather } from '../../utils/weatherApi';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  const weatherTemp = "70°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
    .then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    })
    .catch((error) => {
      console.error("Error fetching forecast weather:", error);
    });
  }, []);

  const handleRemoveCard = (cardToRemove) => {
    api
      .deleteItem(cardToRemove._id)
      .then(() => {
        setCards(cards.filter((card) => card !== cardToRemove));
        console.log("Card removed successfuly from server.");
      })
      .catch((error) => {
        console.error("Error removing card from server:", error);
      });
  };

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main 
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              cards={cards}
              onRemoveCard={handleRemoveCard}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              cards={cards}
              onSelectCard={handleSelectedCard}
              onAddItem={onAddItem}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleCreateModal={handleCreateModal}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal 
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleRemoveCard} />
        )}
      </CurrentTemperatureUnitContext.Provider>  
    </div>
  );
}

export default App;

