import "./mainPage.css";
import Result from "../Result/Result";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../Redux/slices/moviesSlice";

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchMovies(searchTerm));
  };

  return (
    <div className="search_box">
      <h1 className="search_title">Поиск фильмов</h1>
      <div className="form_search">
        <div className="form_search_input">
          <span className="form_span">Введите название фильма</span>
          <input
            className="form_input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="form_btn" onClick={handleSearch}>
          Поиск
        </button>
      </div>
      <Result />
    </div>
  );
}
