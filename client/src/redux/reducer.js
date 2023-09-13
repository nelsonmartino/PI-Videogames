import {
  GET_VIDEOGAMES,
  RESET_FILTER,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  SEARCH_VIDEOGAMES,
  DELETE_VIDEOGAME,
  FILTER_ACTION,
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

    case FILTER_ACTION:
      let copyVideogames = [...state.allVideogames];
      if (action.payload.origin !== "allGames") {
        copyVideogames = copyVideogames.filter(
          (videogame) => videogame.origin === action.payload.origin
        );
      }
      if (action.payload.genre !== "allGames") {
        copyVideogames = copyVideogames.filter((videogame) =>
          videogame.genres.includes(action.payload.genre)
        );
      }
      return { ...state, videogames: copyVideogames };

    case SEARCH_VIDEOGAMES:
      return { ...state, videogames: action.payload };

    // case SEARCH_VIDEOGAMES:
    //   return {
    //     ...state,
    //     videogames: state.allVideogames.filter((videogame) =>
    //       videogame.name.toLowerCase().includes(action.payload.toLowerCase())
    //     ),
    //   };

    case DELETE_VIDEOGAME:
      let apiVideogames = [...state.allVideogames].filter(
        (videogame) => videogame.origin === "api"
      );
      return {
        ...state,
        videogames: [...action.payload, ...apiVideogames],
        allVideogames: [...action.payload, ...apiVideogames],
      };

    case RESET_FILTER:
      return { ...state, videogames: [...state.allVideogames] };
    default:
      return { ...state };
  }
};

export default rootReducer;
