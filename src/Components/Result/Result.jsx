import "./result.css";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { addMovie } from "../../Redux/slices/moviesSlice";

export default function Result() {
  const { moviesAll, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const addMovies = (film) => {
    dispatch(addMovie(film));
  };

  return (
    <>
      <div className="box_list">
        {loading && <Preloader />}
        {error && <p>Ошибка: {error}</p>}
        <ul className="film_items">
          {moviesAll.map((movie) => (
            <li className="film_item" key={movie.imdbID}>
              <img src={movie.Poster} className="item_img" />
              <p className="item_title">
                Название: <span>{movie.Title}</span>
              </p>
              <p className="item_age">
                Год выхода: <span>{movie.Year}</span>
              </p>
              <button onClick={() => addMovies(movie)} className="add_item_btn">
                Добавить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
