import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const RESET_FILTER = "RESET_FILTER";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";

export const getVideogames = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/videogames");
      dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      alert(error);
    }
  };
};

export const filterByOrigin = (origin) => {
  return { type: FILTER_BY_ORIGIN, payload: origin };
};

export const filterByGenre = (genre) => {
  return { type: FILTER_BY_GENRE, payload: genre };
};

export const orderByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
};

export const orderByRating = (order) => {
  return { type: ORDER_BY_RATING, payload: order };
};

export const searchGames = (word) => {
  return async function (dispatch) {
    axios
      .get(`http://localhost:3001/videogames/name?search=${word}`)
      .then((res) => dispatch({ type: SEARCH_VIDEOGAMES, payload: res.data }))
      .catch((error) => alert(error));
  };
};

export const deleteVideogame = (id) => {
  return async function (dispatch) {
    axios
      .delete(`http://localhost:3001/videogames/${id}`)
      .then((res) => dispatch({ type: DELETE_VIDEOGAME, payload: res.data }))
      .catch((error) => alert(error));
  };
};

export const resetFilter = () => {
  return { type: RESET_FILTER };
};
