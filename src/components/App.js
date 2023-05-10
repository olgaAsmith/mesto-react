import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./Popups/PopupWithForm";
import ImagePopup from "./Popups/ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";
import EditProfilePopup from "./Popups/EditProfilePopup";
import EditAvatarPopup from "./Popups/EditAvatarPopup";
import AddPlacePopup from "./Popups/AddPlacePopup";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from "./sign/SignIn";
import SignUp from "./sign/SignUp";

function App() {
  //*pops
  const [isEditProfilePopupOpen, SetIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, SetIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, SetSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  //*get user data
  React.useEffect(() => {
    api
      .getUserData()
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //*set fsalse open pops
  const closeAllPopup = () => {
    SetIsEditProfilePopupOpen(false);
    SetIsAddPlacePopupOpen(false);
    SetIsEditAvatarPopupOpen(false);
    SetSelectedCard({});
  };
  //*set true open pops
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
    SetSelectedCard({ cardLink: card.link, cardName: card.name, isOpen: true });
  };

  //*get list card
  React.useEffect(() => {
    api
      .getCardsData()
      .then((dataCards) => {
        setCards([...dataCards]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //*like card
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((owner) => owner._id === currentUser._id);
    api
      .likeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //*delete card
  const handleCardDelete = (card) => {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //*add new card
  const handleNewPlace = (cardName, cardLink) => {
    api
      .createCard(cardName, cardLink)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopup();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //*change username
  const handleUpdateUser = (user) => {
    api
      .editUserInfo(user.name, user.about)
      .then(() => {
        setCurrentUser({ ...currentUser, name: user.name, about: user.about });
        closeAllPopup();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //*change avatar
  const handleUpdateAvatar = (avatar) => {
    api
      .setAvatar(avatar)
      .then(() => {
        setCurrentUser({ ...currentUser, avatar: avatar });
        closeAllPopup();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Routes>
            <Route path='/mesto-react' element={<Main
              cards={cards}
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
              onCardLike={(card) => {
                handleCardLike(card);
              }}
              onCardDelete={(card) => {
                handleCardDelete(card);
              }}
            />} />
            <Route path='/sign-up' element={<SignUp
            />} />
            <Route path='/sign-in' element={<SignIn  />} />
          </Routes>
          <Footer />
          //*POPUPS //& edit profile
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopup}
            onUpdateUser={handleUpdateUser}
          ></EditProfilePopup>
          //& new place
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopup}
            onAddPlace={handleNewPlace}
          ></AddPlacePopup>
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
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopup}
            onUpdateAvatar={handleUpdateAvatar}
          ></EditAvatarPopup>
          <ImagePopup card={selectedCard} onClose={closeAllPopup} />
        </div>
      </div>
    </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
