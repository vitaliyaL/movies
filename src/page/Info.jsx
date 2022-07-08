import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionMovies } from "../redux/actions";
import { useParams } from "react-router-dom";
import Card from '../components/Card/Card'
import YouTube from 'react-youtube';
import './Info.css'

function Info() {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();
  const { info,trailers, loading, success, error } = useSelector(
    (state) => state.movies
  );
  useEffect(() => {
    dispatch(actionMovies.getInfoMovie(params.id));
  }, [params.id]);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 2,
    },
  };
  return (
    <div className="info">
      <img src={`https://image.tmdb.org/t/p/w500${info?.poster_path}`} />
      <p>{info?.title}</p>
      <YouTube videoId={trailers?.key} opts={opts} />
    </div>
  );
}

export default Info;
