import "./result.css";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

export default function Result() {
  const { moviesAll, loading, error } = useSelector((state) => state.movies);

  return (
    <>
      <div className="box_list">
        {loading && <Preloader />}
        {error && <p>Ошибка: {error}</p>}
        <ul className="film_items">
          {moviesAll.map((movie) => (
            <li className="film_item" key={movie.imdbID}>
              <Link to="/info" state={{ id: movie.imdbID }}>
                <img src={movie.Poster} className="item_img" />
                <p className="item_title">
                  Название: <span>{movie.Title}</span>
                </p>
                <p className="item_age">
                  Год выхода: <span>{movie.Year}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
