import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./Popups/PopupWithForm";
import ImagePopup from "./Popups/ImagePopup";
function App() {
  //*states
  const [isEditProfilePopupOpen, SetIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, SetIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, SetSelectedCard] = React.useState("");
  //*set fsalse open
  const closeAllPopup = () => {
    SetIsEditProfilePopupOpen(false);
    SetIsAddPlacePopupOpen(false);
    SetIsEditAvatarPopupOpen(false);
    SetSelectedCard({});
  };
  //*set true open
  const handleEditProfileClick = () => {
    SetIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    SetIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    SetIsEditAvatarPopupOpen(true);
  };
  const handleCardClick = (card) => {
    SetSelectedCard({ cardLink: card.src, cardName: card.alt, isOpen: true });
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={() => {
            handleEditAvatarClick();
          }}
          onEditProfile={() => {
            handleEditProfileClick();
          }}
          onAddPlace={() => {
            handleAddPlaceClick();
          }}
          onCardClick={(card) => {
            handleCardClick(card);
          }}
        />
        <Footer />
        //*POPUPS //& edit profile
        <PopupWithForm
          popupName="popup_edit-profile"
          title="Редактировать профиль"
          formClassName="popup__form_profile"
          formName="profile"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
        >
          <input
            id="popup-input-tag-name"
            className="popup__input popup__input_tag_name"
            type="text"
            defaultValue=""
            name="accountName"
            required
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
          />
          <span id="popup-input-tag-name-error" className="popup__error"></span>
          <input
            id="popup-input-tag-prof"
            className="popup__input popup__input_tag_prof "
            type="text"
            defaultValue=""
            name="accountProf"
            required
            placeholder="Ваш род деятельности"
            minLength="2"
            maxLength="200"
          />
          <span id="popup-input-tag-prof-error" className="popup__error"></span>
        </PopupWithForm>
        //& new place
        <PopupWithForm
          popupName="popup_new-place"
          title="Новое место"
          formClassName="popup__form_cards"
          formName="addCard"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
        >
          <input
            id="popup-input-image-name"
            className="popup__input popup__input_image_name"
            type="text"
            defaultValue=""
            name="placeName"
            required
            placeholder="Название"
            minLength="2"
            maxLength="30"
          />
          <span
            id="popup-input-image-name-error"
            className="popup__error"
          ></span>
          <input
            id="popup-input-image-link"
            className="popup__input popup__input_image_link"
            type="url"
            defaultValue=""
            name="placeLink"
            required
            placeholder="Ссылка на картинку"
          />
          <span
            id="popup-input-image-link-error"
            className="popup__error"
          ></span>
        </PopupWithForm>
        //& are you sure?
        <PopupWithForm
          popupName="popup_delete-card-question"
          containerName="popup__container_delete-card"
          titleClassName="popup__title_delete-card-question"
          title="Вы уверены?"
          buttonClassName="popup__button-say-yes"
          buttonText="Да"
        ></PopupWithForm>
        //& new avatar
        <PopupWithForm
          popupName="popup_set-new-avatar"
          containerName="popup__container_set-new-avatar"
          titleClassName="popup__title_new-avatar"
          title="Обновить аватар"
          formClassName="popup__form_avatar"
          formName="addAvatar"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
        >
          <input
            id="popup-input-avatar-link"
            className="popup__input popup__input_avatar_link"
            type="url"
            defaultValue=""
            name="avatarLink"
            required
            placeholder="Ссылка на новый аватар"
          />
          <span
            id="popup-input-avatar-link-error"
            className="popup__error"
          ></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopup} />
      </div>
    </div>
  );
}

export default App;
