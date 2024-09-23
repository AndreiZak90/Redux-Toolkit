import { useSelector, useDispatch } from "react-redux";
import { delMovie } from "../../Redux/slices/moviesSlice";

export default function Favorite() {
  const dispatch = useDispatch();
  const { moviesFavorite } = useSelector((state) => state.movies);
  console.log(moviesFavorite);

  const delItem = (id) => {
    dispatch(delMovie(id));
    console.log(id);
  };

  if (moviesFavorite.length === 0) {
    return (
      <>
        <div className="box_none">
          <p className="box_none_text">
            Вы не добавили пока-что ни одного фильма
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ul className="film_items">
          {moviesFavorite.map((movie) => (
            <li className="film_item" key={movie.imdbID}>
              <img src={movie.Poster} className="item_img" />
              <p className="item_title">
                Название: <span>{movie.Title}</span>
              </p>
              <p className="item_age">
                Год выхода: <span>{movie.Year}</span>
              </p>
              <button
                onClick={() => delItem(movie.imdbID)}
                className="item_del"
              >
                удалить
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
