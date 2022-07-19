export const actionTypes = {
  ADD_MOVIES: "ADD_MOVIES",
  DELETE_MOVIES: "DELETE_MOVIES",
  DELETE_ALL:"DELETE_ALL",
};
export const addMovies = (payload) =>{
 return { type: actionTypes.ADD_MOVIES, payload };
}
export const deleteMovies = (id) =>{
  return { type: actionTypes.DELETE_MOVIES, payload:id };
 }
 export const deleteAll = (payload) =>{
  return { type: actionTypes.DELETE_ALL,payload};
 }