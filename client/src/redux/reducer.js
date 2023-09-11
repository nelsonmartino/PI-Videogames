import {
  GET_VIDEOGAMES,
  FILTER_BY_ORIGIN,
  FILTER_BY_GENRE,
  RESET_FILTER,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  SEARCH_VIDEOGAMES,
  DELETE_VIDEOGAME,
} from "./actions";

const initialState = {
  videogames: [],
  allVideogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: [...action.payload],
        allVideogames: [...action.payload],
      };
    case FILTER_BY_ORIGIN:
      return {
        ...state,
        videogames: [
          ...state.allVideogames.filter(
            (videogame) => videogame.origin === action.payload
          ),
        ],
      };
    case FILTER_BY_GENRE:
      return {
        ...state,
        videogames: [
          ...state.allVideogames.filter((videogame) =>
            videogame.genres.includes(action.payload)
          ),
        ],
      };
    case ORDER_BY_NAME:
      let nameVideogames = [...state.videogames];
      return {
        ...state,
        videogames: nameVideogames.sort((x, y) => {
          return action.payload === "Ascendant"
            ? x.name.localeCompare(y.name)
            : y.name.localeCompare(x.name);
        }),
      };

    case ORDER_BY_RATING:
      let ratingVideogames = [...state.videogames];
      return {
        ...state,
        videogames: ratingVideogames.sort((x, y) => {
          return action.payload === "Ascendant"
            ? x.rating - y.rating
            : y.rating - x.rating;
        }),
      };

    case SEARCH_VIDEOGAMES:
      return { ...state, videogames: action.payload };

      case DELETE_VIDEOGAME:
        let apiVideogames=[...state.allVideogames].filter(videogame=>videogame.origin==='api')
        return {...state, videogames:[...action.payload,...apiVideogames], allVideogames:[...action.payload,...apiVideogames]}

    case RESET_FILTER:
      return { ...state, videogames: [...state.allVideogames] };
    default:
      return { ...state };
  }
};

export default rootReducer;
