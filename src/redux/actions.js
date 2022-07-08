import axios from "axios";

export const actionTypes = {
  SET_MOVIES: "SET_MOVIES",
  SET_MOVIES_SUCCESS: "SET_MOVIES_SUCCESS",
  SET_MOVIES_ERROR: "SET_MOVIES_ERROR",

  SET_INFO_MOVIES: "SET_INFO_MOVIES",
  SET_INFO_MOVIES_SUCCESS: "SET_INFO_MOVIES_SUCCESS",
  SET_INFO_MOVIES_ERROR: "SET_INFO_MOVIES_ERROR",
};
export const actionMovies={
  getMovie : (page) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.SET_MOVIES });
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=b4a6374152da849fa2106a2c105a568b&language=ru-RU&page=${page}&`
        )
        .then((res) => {
          dispatch({
            type: actionTypes.SET_MOVIES_SUCCESS,
            payload: res.data.results,
          });
        }).catch((err)=>{
          console.log(err.response, err)
          dispatch({
            type: actionTypes.SET_MOVIES_ERROR,
            payload: err.response,
            });
        });
    };
  },
  getInfoMovie : (id) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.SET_INFO_MOVIES });
      axios
        .get(
          `http://api.themoviedb.org/3/movie/${id}?api_key=b4a6374152da849fa2106a2c105a568b&append_to_response=videos`
        )
        .then((res) => {
          dispatch({
            type: actionTypes.SET_INFO_MOVIES_SUCCESS,
            payload: res.data,
          });
        }).catch((err)=>{
          console.log(err.response, err)
          dispatch({
            type: actionTypes.SET_INFO_MOVIES_ERROR,
            payload: err.response,
            });
        });
    };
  },
}

