import { CardContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions";


function Home({ page, setPage }) {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    !videogames.length && dispatch(getVideogames(setIsLoading));
  }, [dispatch,videogames.length]);

  return (
    <>
      <CardContainer isLoading={isLoading} page={page} setPage={setPage} videogames={videogames} />
    </>
  );
}

export default Home;
