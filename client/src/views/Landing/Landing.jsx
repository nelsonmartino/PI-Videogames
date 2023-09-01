import start from "../../utils/img/Start.png";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={style.container}>
      <Link to="/home">
        <img className={style.image} src={start} alt="" />
      </Link>
    </div>
  );
}

export default Landing;
