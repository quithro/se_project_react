import "./ItemModal.css";

const ItemModal = ({ isOpen, onClose, card, name, onDelete }) => {
    return (
      <div
        className={
          isOpen
            ? `modal modal__type_${name}`
            : `modal_closed modal__type_${name}`
        }
      >
        <div className="modal__content">
          <button className="modal__close-button" onClick={onClose} />
          <img
            className="modal__image"
            src={card.imageUrl}
            alt={card.name}
          />
          <div>
            <h4 className="modal__name">{card.name}</h4>
            <button className="modal__delete-button" onClick={onDelete}>
              Delete item
            </button>
            <h4 className="modal__weather">Weather: {card.weather}</h4>
          </div>
        </div>
      </div>
    );
  };


export default ItemModal;