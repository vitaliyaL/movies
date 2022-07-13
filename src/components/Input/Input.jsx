import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionMovies } from "../../redux/actions";
import "./Input.css";
function Input() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
        dispatch(actionMovies.getSearchMovie(search))
    }
  };
  return (
    <div className="inp">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSearch}>search</button>
    </div>
  );
}

export default Input;
