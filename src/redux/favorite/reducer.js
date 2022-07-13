import { actionTypes } from "./action";

const initialState = {
  favoriteMovies: [],
};
export const favoriteReducer = (state = initialState, action) => {
  const {type, payload}=action
  switch (type) {
    case actionTypes.ADD_MOVIES:
      return {
        ...state,
        favoriteMovies: [...(new Set( [...(state.favoriteMovies),payload]))],
      };
      default:
        return state;
  }
};
