import React from "react";

function SighIn() {
  return (
    <div className="sign-in">
      <h3 className="title sign-in__title">Вход</h3>
      <form action="#" className="sign-in__form" name="sign-in-form">
        <input
          id="sign-in-input-email"
          className="input sign-in__input"
          type="e-mail"
          name="signInInput"
          required
          placeholder="Email"
          minLength="2"
          maxLength="40"
        />
        <span id="sign-in-input-email-error" className="popup__error"></span>

        <input
          id="sign-in-input-pass"
          className="input sign-in__input"
          type="password"
          name="signInPassword"
          required
          placeholder="Пароль"
        />
        <span id="sign-in-input-pass-error" className="popup__error"></span>

        <button className="button sign-in__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default SighIn;
