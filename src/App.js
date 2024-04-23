import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Lists from "./components/Lists";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Users from "./components/Users";
import { ChangePassoword } from "./components/changePassword";
import Category from "./components/Category";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home media="movie" entretenimiento="Peliculas" />} />
        <Route path="/tv" element={<Home media="tv" entretenimiento="Series" />} />
        <Route path={"/tv/:categoria"} element={<Category media="tv" />} />
        <Route path={"/movie/:categoria"} element={<Category media="movie" />} />
        <Route path="/favorites" element={<Lists type="Favorites" title="Favoritas"/>} />
        <Route path="/verDespues" element={<Lists type="VerDespues" title="Ver despues"/>} />
        <Route path="/vistas" element={<Lists type="vistas" title="Vistas"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/changePassword" element={<ChangePassoword />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
