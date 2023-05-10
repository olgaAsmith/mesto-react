import React from "react";

function SighUp() {
  return (
    <div className="sign-in">
      <h3 className="title sign-in__title">Регистрация</h3>
      <form action="#" className="sign-in__form" name="sign-in-form">
        <input
          id="sign-up-input-email"
          className="input sign-in__input"
          type="e-mail"
          name="signUpInput"
          required
          placeholder="Email"
          minLength="2"
          maxLength="40"
        />
        <span id="sign-up-input-email-error" className="popup__error"></span>

        <input
          id="sign-up-input-pass"
          className="input sign-in__input"
          type="password"
          name="signIUpPassword"
          required
          placeholder="Пароль"
        />
        <span id="sign-iup-input-pass-error" className="popup__error"></span>

        <button className="button sign-in__button" type="submit">
          Зарегистрироваться
        </button>
        <div className="sign-up__under-text">
          <p className="sign-up__text">Уже зарегистрированы? </p>
          <a className="button sign-up__link" href="/sign-in">Войти</a>
        </div>
      </form>
    </div>
  );
}

export default SighUp;
