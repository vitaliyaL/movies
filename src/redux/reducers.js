import { actionTypes } from "./actions";

const initialState = {
  movies: [],
  success: false,
  loading: false,
  error: false,
};
export const reducerMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: [],
        success: false,
        loading: true,
        error: false,
      };
    case actionTypes.SET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        success: true,
        loading: false,
        error: false,
      };
    case actionTypes.SET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
