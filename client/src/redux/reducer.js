import {
  GET_VIDEOGAMES,
  FILTER_BY_ORIGIN,
  FILTER_BY_GENRE,
  RESET_FILTER,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  SEARCH_VIDEOGAMES,
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
      state.videogames = [...state.allVideogames];
      return {
        ...state,
        videogames: state.videogames.sort((x, y) => {
          return action.payload === "Ascendant"
            ? x.name.localeCompare(y.name)
            : y.name.localeCompare(x.name);
        }),
      };

    case ORDER_BY_RATING:
      state.videogames = [...state.allVideogames];
      return {
        ...state,
        videogames: state.videogames.sort((x, y) => {
          return action.payload === "Ascendant"
            ? x.rating - y.rating
            : y.rating - x.rating;
        }),
      };

    case SEARCH_VIDEOGAMES:
      return { ...state, videogames: action.payload };

    case RESET_FILTER:
      return { ...state, videogames: [...state.allVideogames] };
    default:
      return { ...state };
  }
};

export default rootReducer;
