import "./App.css";
import Favorite from "./Components/favorite/Favorite";
import MainPage from "./Components/MainPage/MainPage";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main_box">
        <Link to="*">
          <div className="box_item">Поиск</div>
        </Link>
        <Link to="/favorite">
          <div className="box_item">Избранное</div>
        </Link>
      </div>
      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
