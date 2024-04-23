import React from "react";
import { useState } from "react";
import "../Style/FormLog.css"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../dbSimulator'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const validateForm = () => {

    let errors = {}
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || regexEmail.test(email.value)) {
      errors.email = "El email es invalido";
    } if (!password || regexPassword.test(password.value)) {
      errors.password = "La contraseña es invalida";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handdleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handdlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //USERS
    try {
      if (validateForm()){
        const payload = loginUser({ email, password })
        localStorage.setItem("token", payload.id)
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: payload.name,
            id: payload.id,
            email: payload.email,
            lastname: payload.lastName,
          }))

          const userNoparse = localStorage.getItem("user");
          const user = JSON.parse(userNoparse);
          console.log(user.lastname)
      }

      navigate("/")
    } catch {
      alert("Usuario no existe");
    }

  };



  return (
    <>
      <img
        src={"../assets/bannerXmen.jpeg"}
        style={{ maxWidth: 1400 }}
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
