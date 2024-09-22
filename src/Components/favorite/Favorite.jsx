import { useSelector } from "react-redux";

export default function Favorite() {
  const { moviesFavorite } = useSelector((state) => state.movies);
  console.log(moviesFavorite);

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
            </li>
          ))}
        </ul>
      </>
    );
  }
}
