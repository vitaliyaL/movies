import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovies, deleteAll } from "../../redux/favorite/action";
import Card from "../../components/Card/Card";
import "./Favorite.css";
function Favorite() {
  const dispatch = useDispatch();
  const { favoriteMovies } = useSelector((state) => state.favoriteMovies);
  const handleDelete = (id) => () => {
    dispatch(deleteMovies(id));
  };
  const handleDelAll=()=>{
    dispatch(deleteAll())
  }
  return (
    <>
      <div className='fav_cad'>
        {favoriteMovies.map(({ id, title, poster_path, overview }) => (
          <Card
            name={title}
            desc={overview}
            id={id}
            img={poster_path}
            text={"delete"}
            onclick={handleDelete(id)}
          />
        ))}
      </div>
      <button onClick={()=>favoriteMovies.forEach(i => dispatch(deleteMovies(i.id)))}>DELETE ALL</button>
      <button onClick={handleDelAll}>deleteAll</button>
    </>
  );
}

export default Favorite;
