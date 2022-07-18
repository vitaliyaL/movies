import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
function Favorite() {
    const dispatch = useDispatch();
  const { favoriteMovies} = useSelector(
    (state) => state.favoriteMovies
  );
  return (
      <div>
        {favoriteMovies.map(({ id, title, poster_path, overview }) => (
          <Card name={title} desc={overview} id={id} img={poster_path} />
        ))}
      </div>
  );
}

export default Favorite;
