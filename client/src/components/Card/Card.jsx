import style from "./Card.module.css";

function Card({ videogame }) {
  return (
    <div className={style.card}>
      <h1>Nombre:{videogame.name}</h1>
      <h1>Rating:{videogame.rating}</h1>
      <h2>Platforms:</h2>
      {videogame.platforms.map((platform) => (
        <p key={platform}>{platform}</p>
      ))}
      <h2>Genres:</h2>
      {videogame.genres.map((genre) => (
        <p key={genre}>{genre}</p>
      ))}
    </div>
  );
}

export default Card;
