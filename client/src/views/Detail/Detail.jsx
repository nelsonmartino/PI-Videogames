import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();

  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then((res) => setVideogame(res.data))
      .catch((error) => alert(error));
  }, [id]);

  return (
    <div className={style.container}>
      <div>
        <h1>ID {videogame.id}</h1>
        <h1>{videogame.name}</h1>
      </div>
      <div className={style.intermediate}>
        <img
          className={style.image}
          src={videogame.background_image}
          alt={videogame.name}
        />
        <div className={style.intermediateInfo}>
          <h2>Platforms</h2>
          {videogame.platforms?.map((platform) => (
            <p key={platform}>{platform}</p>
          ))}
          <p>Released {videogame.released}</p>
          <h2>Rating: {videogame.rating}</h2>
          <h2>Genres</h2>
          {videogame.genres?.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: videogame.description }} />
    </div>
  );
}

export default Detail;
