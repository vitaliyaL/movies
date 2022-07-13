export const actionTypes = {
  ADD_MOVIES: "ADD_MOVIES",
};
export const addMovies = (payload) =>{
 return { type: actionTypes.ADD_MOVIES, payload };
}
