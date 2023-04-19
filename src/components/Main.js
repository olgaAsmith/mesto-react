import React from "react";
import { api } from "../utils/Api";
import Cards from "./Cards";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, SetUserName] = React.useState("");
  const [userDescription, SetUserDescription] = React.useState("");
  const [userAvatar, SetUserAvatar] = React.useState("");
  const [cards, SetCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData().then((dataUser) => {
      SetUserName(dataUser.name);
      SetUserDescription(dataUser.about);
      SetUserAvatar(dataUser.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getCardsData().then((dataCards) => {
      SetCards([...dataCards]);
    });
  }, []);

  return (
    <main className="content">
      <section className="account">
        <div className="account__avatar-place">
          <img
            src={userAvatar}
            alt="Аватар"
            className="account__image"
            onClick={onEditAvatar}
          />
          <img
            src={require("../images/pencil.png")}
            alt="Карандаш"
            className="account__image-edit"
          />
        </div>
        <div className="account__owner">
          <h1 className="account__name">{userName}</h1>
          <button
            className="button account__edit"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="account__profession">{userDescription}</p>
        </div>
        <button
          className="button account__add-image"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="gallery">
        <ul className="list gallery__items">
          {cards.map(({ _id, ...props }) => (
            <Cards key={_id} {...props} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
