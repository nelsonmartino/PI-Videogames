import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import {
  filterByGenre,
  filterByOrigin,
  resetFilter,
  orderByName,
  orderByRating,
} from "../../redux/actions";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "../index";

function NavBar() {
  const dispatch = useDispatch();

  const location = useLocation();

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function apiReq() {
      try {
        const { data } = await axios.get("http://localhost:3001/genres");
        setGenres(data);
      } catch (error) {
        alert(error);
      }
    }
    apiReq();
  }, []);

  const originHandler = (event) => {
    const origin = event.target.value;
    if (origin === "allGames") {
      dispatch(resetFilter());
    } else {
      dispatch(filterByOrigin(origin));
    }
  };

  const genreHandler = (event) => {
    const genre = event.target.value;
    if (genre === "allGames") {
      dispatch(resetFilter());
    } else {
      dispatch(filterByGenre(genre));
    }
  };

  const nameHandler = (event) => {
    const order = event.target.value;
    if (order === "allGames") {
      dispatch(resetFilter());
    } else {
      dispatch(orderByName(order));
    }
  };

  const ratingHandler = (event) => {
    const order = event.target.value;
    if (order === "allGames") {
      dispatch(resetFilter());
    } else {
      dispatch(orderByRating(order));
    }
  };

  return (
    <div className={style.navBar}>
      <div className={style.levelOne}>
        <div className={style.access}>
          <Link to="/home">
            <div className={style.text}>HOME</div>
          </Link>
          <Link to="/create">
            <div className={style.text}>CREATE</div>
          </Link>
        </div>
        {location.pathname==='/home' &&<div className={style.searchbar}>
          <SearchBar />
        </div>}
      </div>
      {location.pathname==='/home' && <div className={style.levelTwo}>
        <div className={style.filters}>
          <select onChange={originHandler}>
            <option value="allGames">Filter By Origin</option>
            <option value="database">Database</option>
            <option value="api">API</option>
          </select>
          <select onChange={genreHandler}>
            <option value="allGames">Filter By Genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.orderers}>
          <select onChange={nameHandler}>
            <option value="allGames">Order By Name</option>
            <option value="Ascendant">A...Z</option>
            <option value="Descendant">Z...A</option>
          </select>
          <select onChange={ratingHandler}>
            <option value="allGames">Order By Rating</option>
            <option value="Ascendant">Ascendant</option>
            <option value="Descendant">Descendant</option>
          </select>
        </div>
      </div>}
    </div>
  );
}

export default NavBar;
