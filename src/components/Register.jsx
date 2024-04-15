import React from "react";
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handdleName = (e) => {
    setName(e.target.value);
  };
  const handdleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handdleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handdlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/register", {
        name,
        lastname,
        email,
        password,
      })

      .then(() => navigate("/login"))
      .catch(() => alert("Usuario no existe"));
      navigate("/")
  };

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col pt-5">
          <h1 className="mb-5">Register</h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                onChange={handdleName}
                value={name}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                onChange={handdleLastName}
                value={lastname}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={handdleEmail}
                value={email}
              />
            </div>

            <div className="col-auto">
              <label className="visually-hidden">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
                onChange={handdlePassword}
                value={password}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </>
    
  );
};

export default Register;
