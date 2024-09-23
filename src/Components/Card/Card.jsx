import "./card.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Redux/slices/moviesSlice";
import Preloader from "../Preloader/Preloader";

export default function Card() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);

  const addMovies = (film) => {
    dispatch(addMovie(film));
  };

  useEffect(() => {
    const loadFile = async () => {
      await fetch(`https://www.omdbapi.com?apikey=64405bd2&i=${id}`)
        .then((response) => response.json())
        .then((data) => setState(data))
        .catch((err) => console.log(err));
      setLoading(false);
    };
    loadFile();
  }, [id]);

  if (loading) {
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <>
      <div className="max_card">
        <img src={state.Poster} className="card_poster" />
        <div className="card_info">
          <div className="item_box">
            <p className="item_text">Название: </p>
            <p className="item_rating_value">{state.Title}</p>
          </div>
          <div className="item_box">
            <p className="item_text">Год выхода: </p>
            <p className="item_rating_value">{state.Year}</p>
          </div>
          <div className="item_box">
            <p className="item_text">Жанр: </p>
            <p className="item_rating_value">{state.Genre}</p>
          </div>
          <div className="item_box">
            <p className="item_text">Продолжительность: </p>
            <p className="item_rating_value">{state.Runtime}</p>
          </div>
          <div className="item_box">
            <p className="item_text">Режиссер: </p>
            <p className="item_rating_value">{state.Director}</p>
          </div>
          <div className="item_box">
            <p className="item_text">Актёры: </p>
            <p className="item_rating_value">{state.Actors}</p>
          </div>
          <div className="item_box">
            <p className="item_text">Рейтинг: </p>
            <p className="item_rating_value">{state.imdbRating}</p>
          </div>
          <button onClick={() => addMovies(state)} className="addFavor">
            Добавить в Избранное
          </button>
        </div>
      </div>
    </>
  );
}
