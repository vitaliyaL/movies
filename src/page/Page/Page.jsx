import React, { Fragment } from "react";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import "./Page.css";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionMovies } from "../../redux/actions";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import Input from "../../components/Input/Input";
import TrueHeader from "../../components/TrueHeader/TrueHeader";
import { addMovies, deleteMovies } from "../../redux/favorite/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { genres } from "../../constants/genres";
import { actionGenres } from "../../redux/genres/action";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function Page() {
  const [page, statePage] = useState(1);
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);
  const { favoriteMovies } = useSelector((state) => state.favoriteMovies);
  const { items } = usePagination({
    count: 500,
  });
  useEffect(() => {
    dispatch(actionMovies.getMovie(page));
  }, [page]);
  const arr = new Array(30).fill(0);
  const handlePage = (e) => {
    statePage(e.target.textContent);
  };
  const handleFavorite = (id) => (e) => {
    e.target.classList.toggle("active");
    e.target.classList.contains("active")
      ? dispatch(addMovies(movies.find((i) => i.id === id)))
      : dispatch(deleteMovies(id));

    toast.success("Добавлено!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleGenres = (id) => () => {
    dispatch(actionGenres.getGenres(id));
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='container'>
      <TrueHeader />
      <Header movies={movies} />
      <div className='buttons'>
        {arr.map((_, index) => (
          <Buttons name={index + 1} onclick={handlePage} />
        ))}
        <Input />
        <div>
          {genres.map((i) => {
            return (
              <Fragment key={i.id}>
                <button onClick={handleGenres(i.id)}>{i.name}</button>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className='cards'>
        {movies.map(({ id, title, poster_path, overview }) => {
          let active = false;
          if (favoriteMovies.filter((i) => i.id === id).length) {
            active = true;
          }
          return (
            <Card
              name={title}
              desc={overview}
              id={id}
              img={poster_path}
              onclick={handleFavorite(id)}
              text={"favorite"}
              isActive={active}
            />
          );
        })}
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <List onClick={handlePage}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type='button'
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </div>
  );
}

export default Page;
