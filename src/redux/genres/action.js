import axios from "axios";

export const actionTypes = {
  SET_GENRES: "SET_GENRES",
  SET_GENRES_SUCCESS: "SET_GENRES_SUCCESS",
  SET_GENRES_ERROR: "SET_GENRES_ERROR",
};

export const actionGenres = {
  getGenres: (id) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.SET_GENRES });
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=b4a6374152da849fa2106a2c105a568b&with_genres=${id}`
        )
        .then((res) => {
          dispatch({
            type: actionTypes.SET_GENRES_SUCCESS,
            payload: res.data.results,
          });
        })
        .catch((err) => {
          console.log(err.response, err);
          dispatch({
            type: actionTypes.SET_GENRES_ERROR,
            payload: err.response,
          });
        });
    };
  },
};
