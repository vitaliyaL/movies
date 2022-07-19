import { actionTypes } from "./action";

const initialState = {
  favoriteMovies: [],
};
export const favoriteReducer = (state = initialState, action) => {
  const {type, payload}=action
  const array_id=[]
  switch (type) {
    case actionTypes.ADD_MOVIES:
      return {
        ...state,
        favoriteMovies:  [...(state.favoriteMovies),payload].filter((i)=>{
          if(!array_id.includes(i.id)){
            array_id.push(i.id)
            return i
          }
        }),
      };
      case actionTypes.DELETE_MOVIES:
        return {
          ...state,
          favoriteMovies: state.favoriteMovies.filter(i=>i.id!=payload)
        }
        case actionTypes.DELETE_ALL:
          return {
            ...state,
            favoriteMovies: []
          }
      default:
        return state;
  }
};
