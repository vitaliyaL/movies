import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import "./Page.css";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovie } from "../../redux/actions";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function Page() {
  const [page, statePage] = useState(1);
  const dispatch = useDispatch();
  const { movies, loading, success, error } = useSelector(
    (state) => state.movies
  );
  const { items } = usePagination({
    count: 500,
  });
  useEffect(() => {
    dispatch(getMovie(page));
  }, [page]);
  const arr = new Array(30).fill(0);
  const handlePage = (e) => {
    statePage(e.target.textContent);
  };
  return (
    <div className="container">
      <Header movies={movies}/>
      <div className="buttons">
        {arr.map((_, index) => (
          <Buttons name={index + 1} onclick={handlePage} />
        ))}
      </div>
      <div className="cards">
        {movies.map(({ id, title, poster_path, overview }) => (
          <Card name={title} desc={overview} id={id} img={poster_path} />
        ))}
      </div>
      <List onClick={handlePage}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
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
