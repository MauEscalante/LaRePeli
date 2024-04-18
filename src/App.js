import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Users from "./components/Users";
import { ChangePassoword } from "./components/changePassword";

const App = () => {
  const [genre, setGenre] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [seriePopulars, setSeriePopulars] = useState([]);

  useEffect(() => {
    //GENEROS
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
      )
      .then((res) => setGenre(res.data.genres));

    //POPULARES
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
      )
      .then((res) => setPopulars(res.data.results));

      //SERIES POPULARES
      axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
      )
      .then(res=>setSeriePopulars(res.data.results))
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home populars={populars} media="movie" entretenimiento="Peliculas"/>} />
        <Route path="/series" element={<Home populars={seriePopulars}  media="tv" entretenimiento="Series"/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/changePassword" element={<ChangePassoword />} />
        <Route path="/movieDetails/:movieId"  element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
