import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGames, resetFilter } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    const content = event.target.value;
    setInput(content);
  };

  const searchHandler = () => {
    dispatch(searchGames(input));
  };

  const resetHandler = () => {
    dispatch(resetFilter());
    setInput("");
  };

  return (
    <div className={style.searchbar}>
      <div className={style.search}>
        <input
          onChange={changeHandler}
          type="text"
          value={input}
          placeholder="Search by name..."
        />
        <button className={style.button} onClick={searchHandler}>Search</button>
      </div>
      <div>
        <button className={style.button} onClick={resetHandler}>Reset All</button>
      </div>
    </div>
  );
};

export default SearchBar;
