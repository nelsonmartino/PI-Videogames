import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.navBar}>
      <Link to="/home">HOME</Link>
      <Link to="/create">CREATE</Link>
    </div>
  );
}

export default NavBar;
