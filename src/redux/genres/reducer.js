import { actionTypes } from "../actions";

const initialState = {
  genres: [],
  success: false,
  loading: false,
  error: false,
};
export const genresReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_GENRES:
      return {
        ...state,
        genres: [],
        success: false,
        loading: true,
        error: false,
      };
    case actionTypes.SET_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload,
        success: true,
        loading: false,
        error: false,
      };
    case actionTypes.SET_GENRES_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
