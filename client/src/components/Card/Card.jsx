import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({ videogame }) {
  return (
    <Link to={`/detail/${videogame.id}`}>
      <div className={style.card}>
        <h1 className={style.name}>{videogame.name}</h1>
        <img className={style.image} src={videogame.background_image} alt="" />
        <h2 className={style.genres}>Genres</h2>
        <div className={style.genresContainer}>
          {videogame.genres.map((genre) => (
            <p className={style.genre} key={genre}>
              {genre}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Card;
