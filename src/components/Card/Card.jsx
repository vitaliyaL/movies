import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ id, name, img, desc, onclick,text, isActive }) {
  
  return (
    <div className="card" key={id}>
      <Link to={`/info/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${img}`} />
      </Link>
      <p className="name">{name}</p>
      <p className="desc">{desc}</p>
      { isActive ? <button onClick={onclick} className="fav active" >
        {text}
      </button> : <button onClick={onclick} className="fav" >
        {text}
      </button>
    }
    </div>
  );
}

export default Card;
