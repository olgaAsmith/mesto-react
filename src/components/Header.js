import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <a href={location.pathname === "/mesto-react" ? "#!" : "/mesto-react"} className="button header__logo"></a>
      <a href={location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"}  className="button header__sign-in">
        {location.pathname === "/sign-in" ? "Регистрация" : "Войти"}
      </a>
    </header>
  );
}

export default Header;
