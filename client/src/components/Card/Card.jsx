import { Link, useParams } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { deleteVideogame } from "../../redux/actions";

function Card({ videogame }) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteVideogame(videogame.id))
  };

  return (
    <div className={style.card}>
      <Link to={`/detail/${videogame.id}`}>
        <h1 className={style.name}>{videogame.name}</h1>
      </Link>
      <img className={style.image} src={videogame.background_image} alt="" />
      <h2 className={style.genres}>Genres</h2>
      <div className={style.genresContainer}>
        {videogame.genres.map((genre) => (
          <p className={style.genre} key={genre}>
            {genre}
          </p>
        ))}
      </div>
      <div>
        {videogame.origin === "database" && (
          <button className={style.delButton} onClick={deleteHandler}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
