import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
    return (
        <div>
            <div>
            <div className="card__name">{item.name}</div>
                <img
                src={item.imageUrl}
                className="card__image"
                onClick={() => onSelectCard(item)}
                lt={item.name}
            />
            </div>
        </div>
    );
};

export default ItemCard;