import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const UserAvatar = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar(UserAvatar.current.value);
  }

return (
  <PopupWithForm
    popupName="popup_set-new-avatar"
    containerName="popup__container_set-new-avatar"
    titleClassName="popup__title_new-avatar"
    title="Обновить аватар"
    formClassName="popup__form_avatar"
    formName="addAvatar"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    <input
      id="popup-input-avatar-link"
      className="popup__input popup__input_avatar_link"
      type="url"
      defaultValue=""
      name="avatarLink"
      required
      placeholder="Ссылка на новый аватар"
      ref={UserAvatar}
    />
    <span id="popup-input-avatar-link-error" className="popup__error"></span>
  </PopupWithForm>
  );
}

export default EditAvatarPopup;
