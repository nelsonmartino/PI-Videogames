import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import { useState } from "react";
import { Pagination } from "../index";

function CardContainer({ isLoading }) {
  const videogames = useSelector((state) => state.videogames);

  const gamesAtPage = 15;
  const pagesNumber = Math.ceil(videogames.length / gamesAtPage);
  const pagesArray = Array.from(
    { length: pagesNumber },
    (_, index) => index + 1
  );

  const [page, setPage] = useState(1);

  return (
    <>
      <div className={style.container}>
        {isLoading && <div className={style.loader}></div>}
        {videogames
          .slice(gamesAtPage * (page - 1), gamesAtPage * page)
          .map((videogame) => (
            <Card key={videogame.id} videogame={videogame} />
          ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        pagesArray={pagesArray}
        pagesNumber={pagesNumber}
      />
    </>
  );
}

export default CardContainer;
