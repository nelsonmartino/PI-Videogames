import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";

function CardContainer() {
  const videogames = useSelector((state) => state.videogames);

  return (
    <div className={style.container}>
      {videogames.map((videogame) => (
        <Card key={videogame.id} videogame={videogame} />
      ))}
    </div>
  );
}

export default CardContainer;
