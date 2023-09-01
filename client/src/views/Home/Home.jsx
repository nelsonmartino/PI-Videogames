import { CardContainer } from "../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <CardContainer />
    </>
  );
}

export default Home;
