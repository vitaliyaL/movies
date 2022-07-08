import React from "react";
import './Card.css'

function Card({id,name,img,desc}) {
  return (
    <div className="card" key={id}>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} />
      <p className="name">{name}</p>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default Card;

