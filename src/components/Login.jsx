import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handdleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handdlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //USERS
    axios
      .post("http://localhost:3000/api/users/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: res.data.name,
            id: res.data.id,
            email: res.data.email,
            lastname: res.data.lastname,
          })
        );
      })
      .then(() => navigate("/"))
      .catch(() => alert("Usuario no existe"));
    navigate("/");
  };



  return (
    <>
      <img
        src={`https://img.freepik.com/free-photo/lightbox-with-popcorn-table_23-2148470123.jpg?t=st=1713364617~exp=1713368217~hmac=0d9c898e45cc946cf4f805c2c7a50da6f8870e9f6fa131a89f48d0e505afda96&w=1380`}
        style={{ height: '250px', width: '100%' }}
        alt=""
      />
      <div className="container p-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail2"
                  onChange={handdleEmail}
                  value={email}
                />

              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  onChange={handdlePassword}
                  value={password}
                />
              </div>
              <div className="mb-3 ">
                <Link to="/register">
                  <label className="form-check-label">Aun no tengo una cuenta</label>
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>

            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
