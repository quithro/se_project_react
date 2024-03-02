import React from "react";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
    const handleDelete = () => {
        onDelete(selectedCard);
        onClose();
    };
    return (
        <div className={`modal`}>
          <div className="modal__content-item">
                <button
                className="modal__close-item"
                type="button"
                onClick={onClose}
            ></button>
            <img src={selectedCard.imageUrl} alt={selectedCard.name} />{" "}
            <div className="modal__item-card-content">
                <div>
                    <div>{selectedCard.name}</div>
                    <div> Weather type: {selectedCard.weather}</div>
                    </div>
                    <button className="modal__delete-button" onClick={handleDelete}>
                        Delete item
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ItemModal;