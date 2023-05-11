import React from "react";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_info-tooltip
    ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container popup__container_info-tooltip">
        <div className="popup__min-container">
          <div className="popup__image-reg popup__image-reg_success"></div>
          <p className="popup__text-reg">Вы успешно зарегистрировались!</p>
        </div>
        <button
            className="popup__close-button button"
            type="button"
            onClick={props.onClose}
          ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
