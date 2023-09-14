import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import { Pagination } from "../index";

function CardContainer({ isLoading, page, setPage, videogames }) {

  const gamesAtPage = 15;
  const pagesNumber = Math.ceil(videogames.length / gamesAtPage);
  const pagesArray = Array.from(
    { length: pagesNumber },
    (_, index) => index + 1
  );

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
      {pagesNumber>1 && <Pagination
        page={page}
        setPage={setPage}
        pagesArray={pagesArray}
        pagesNumber={pagesNumber}
      />}
    </>
  );
}

export default CardContainer;
