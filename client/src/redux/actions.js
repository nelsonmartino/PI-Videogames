import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export const getVideogames = () => {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/videogames");
    const videogames = data.slice(0, 105);
    dispatch({ type: GET_VIDEOGAMES, payload: videogames });
  };
};
