import "./ModalWithForm.css";

const ModalWithForm =({
    children,
    buttonText,
    title,
    onClose,
    name,
}) => {
    return (
        <div className={`modal modal__type_${name}`}>
            <div className="modal__content">
                <button
                    className="modal__close-button"
                    type="button"
                    onClick={onClose}
                ></button>
                <h3 className="modal__title">{title}</h3>
                <form>
                    {children}
                    <button className="modal__submit-button" type="submit">
                        Add Clothing
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalWithForm;