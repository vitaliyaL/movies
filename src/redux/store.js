import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { favoriteReducer } from "./favorite/reducer";
import { reducerMovies } from "./reducers";
import { genresReducer } from "./genres/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movies: reducerMovies,
    favoriteMovies: favoriteReducer,
    genres:genresReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
