import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../Style/navbar.css"

const Navbar = () => {
  const [estadoOptionList, setEstadoOptionList] = useState(false);
  const initialTipoContenido = localStorage.getItem("tipoContenido") || "movie";
  const [tipoContenido, setTipoContenido] = useState(initialTipoContenido);


  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const navigate = useNavigate();


  const handdleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("tipoContenido", tipoContenido);
  }, [tipoContenido]);

  const handleActualizarTipoContenido = (tipo) => {
    setTipoContenido(tipo);
  };


  const handdleOptionList = () => {
    setEstadoOptionList(!estadoOptionList);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">LaRePeli</a>

        <div className="contenedor-nav col-lg-10 col-6">
          <div className="header-center">
            <input type="checkbox" id="toggle-menu" />
            <label htmlFor="toggle-menu" className="hamburger">&#9776;</label>
            <ul className="primary-menu nav nav-pills">
              <li className="nav-item" onClick={() => handleActualizarTipoContenido("movie")}><a className="nav-link smoth-animation " href="/">Peliculas</a></li>
              <li className="nav-item" onClick={() => handleActualizarTipoContenido("tv")}><a className="nav-link smoth-animation" href="/tv">Series</a></li>
              <li className="nav-item dropdown categoria">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoria
                </a>
                <ul className="dropdown-menu">
                  <Link to={`/${tipoContenido}/accion`}>
                    <li><a className="dropdown-item">Accion</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/animacion`}>
                    <li><a className="dropdown-item">Animacion</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/cienciaFiccion`}>
                    <li><a className="dropdown-item">Ciencia Ficción</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/crimen`}>
                    <li><a className="dropdown-item">Crimen</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/comedia`}>
                    <li><a className="dropdown-item">Comedia</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/fantasia`}>
                    <li><a className="dropdown-item">Fantasia</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/misterio`}>
                    <li><a className="dropdown-item">Misterio</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/romance`}>
                    <li><a className="dropdown-item">Romance</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/suspenso`}>
                    <li><a className="dropdown-item">Suspenso</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/drama`}>
                    <li><a className="dropdown-item">Drama</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/familia`}>
                    <li><a className="dropdown-item">Familia</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/aventura`}>
                    <li><a className="dropdown-item">Aventura</a></li>
                  </Link>
                  <Link to={`/${tipoContenido}/terror`}>
                    <li><a className="dropdown-item">Terror</a></li>
                  </Link>

                </ul>
              </li>
            </ul>
          </div>
        </div>

        <form className="d-flex form-log" role="search">
          {user ? (
            <>
              <div className="dropdown contenedor-menu-log">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5>Perfil </h5>
                </button>
                <ul className="dropdown-menu option-log">

                  <Link to={"/profile"}>
                    <span className="dropdown-item">Mi perfil</span>
                  </Link>
                  <li className="mis-listas" onClick={(e) => { e.stopPropagation(); handdleOptionList(); }}>
                    <a className="dropdown-item dropdown-toggle ">
                      Mis Listas
                    </a>
                    <ul className={estadoOptionList ? "opcion-mis-listas" : "oculto"}>
                      <li><a href="/favorites">Favoritas</a></li>
                      <li><a href="/vistas">vistas</a></li>
                      <li><a href="/verDespues"> Por ver</a></li>
                    </ul>
                  </li>
                  <button className="dropdown-item" onClick={handdleLogout}>
                    Logout
                  </button>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline-info" type="submit">
                  Login
                </button>
              </Link>
            </>
          )}
        </form>
      </div>

    </nav >

  );
};

export default Navbar;
