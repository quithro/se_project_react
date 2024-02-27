import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
    return (
        <div className={`modal`}>
            <div className="modal__content-item">
                <button 
                    className="modal__close-item"
                    type="button"
                    onClick={onClose}
                ></button>
                <img 
                    src={selectedCard.link}
                    alt={selectedCard.name}
                    className="modal__image"
                />
                <div className="modal__caption">
                    <div>{selectedCard.name}</div>
                    <div>Weather type: {selectedCard.weather}</div>
                    <button
                        className="modal__close-item"
                        type="button"
                        onClick={() => {
                            onCardDelete(selectedCard);
                        }}
                    >
                        Delete item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemModal;