import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import {addMovies} from '../../redux/favorite/action'
import { useDispatch ,useSelector} from "react-redux";

function Card({ id, name, img, desc }) {
  const dispatch= useDispatch()
  const { movies } = useSelector(
    (state) => state.movies
  );
  const handleFavorite = (e) => {
    console.log(id);
    dispatch(addMovies((movies.find(i=>i.id==id))))
  };
  return (
    <div className="card" key={id}>
      <Link to={`/info/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${img}`} />
      </Link>
      <button onClick={handleFavorite}>
        favorite
      </button>
      <p className="name">{name}</p>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default Card;
