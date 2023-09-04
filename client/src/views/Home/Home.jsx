import { CardContainer } from "../../components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    dispatch(getVideogames(setIsLoading));
  }, [dispatch]);

  return (
    <>
      <CardContainer isLoading={isLoading} />
    </>
  );
}

export default Home;
