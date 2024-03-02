import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css"

const ClothesSection = ({ items = [], onSelectCard }) => (
    <div className="clothes-section">
      {items &&
        items.map((item, index) => (
          <ItemCard key={index} item={item} onSelectCard={onSelectCard} />
        ))}
    </div>
  )

export default ClothesSection;