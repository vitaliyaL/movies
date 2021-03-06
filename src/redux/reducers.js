import { actionTypes } from "./actions";

const initialState = {
  trailers: {},
  movies: [],
  success: false,
  loading: false,
  error: false,
};
export const reducerMovies = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
        movies: payload,
        success: true,
        loading: false,
        error: false,
      };
    case actionTypes.SET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_INFO_MOVIES:
      return {
        ...state,
        info: [],
        trailers: {},
        success: false,
        loading: true,
        error: false,
      };
    case actionTypes.SET_INFO_MOVIES_SUCCESS:
      return {
        ...state,
        info: payload,
        trailers: payload.videos.results[0],
        success: true,
        loading: false,
        error: false,
      };
    case actionTypes.SET_INFO_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        success: true,
        loading: false,
        error: false,
      };
    case actionTypes.SET_SEARCH_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_SEARCH_MOVIES:
      return {
        ...state,
        movies: [],
        success: false,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
