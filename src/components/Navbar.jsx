
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  const token = localStorage.getItem("token");
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("TERMINAR ACA")
  });

  const handdleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">LaRePeli</a>

        <div className="col-lg-10 col-6">
          <div className="header-center">
            <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">

              <ul className="primary-menu nav nav-pills">
                <li className="nav-item"><a className="nav-link smoth-animation " href="/">Peliculas</a></li>
                <li className="nav-item"><a className="nav-link smoth-animation" href="/series">Series</a></li>
                <li className="nav-item"><a className="nav-link smoth-animation" href="/favorites">favoritos</a></li>
                <li className="nav-item"><a className="nav-link smoth-animation" href="/verDespues">ver Despues</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categoria
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Accion</a></li>
                    <li><a className="dropdown-item" href="#">comedia</a></li>
                    <li><a className="dropdown-item" href="#">Suspenso</a></li>
                  </ul>
                </li>
              </ul>

          </nav>

        </div>
      </div>

      <form className="d-flex" role="search">
        {user ? (
          <>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5> {(user.name + " " + user.lastname).toUpperCase()}</h5>
              </button>
              <ul className="dropdown-menu">

                <Link to={"/profile"}>
                  <button className="dropdown-item">Mi perfil</button>
                </Link>

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
