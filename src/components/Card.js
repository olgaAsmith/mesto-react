import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="gallery__item">
      <img src={props.link} alt={props.name} className="gallery__item-image" onClick={handleClick}/>
      <button className="button gallery__trash" type="button"></button>
      <div className="gallery__info">
        <h2 className="gallery__item-name">{props.name}</h2>
        <div className="gallery__like-block">
          <button className="button gallery__item-like" type="button"></button>
          <p className="gallery__like-count">{props.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
