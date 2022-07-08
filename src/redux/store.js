import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerMovies } from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movies: reducerMovies,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);