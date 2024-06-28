import { useState} from "react";
import { useNavigate,useSearchParams } from "react-router-dom";
import axios from "axios";
 
export function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [searchParams] = useSearchParams ();
    const navigate = useNavigate();
    const token = localStorage.getItem("token") || searchParams.get("email");
   
 
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()){
          axios.put("http://localhost:8000/user/",
              {password:password },
              {headers: { "x-acces-token": token }},
           
        )
          .then(() => navigate("/login"))
          .catch((e) => console.log(e));
        }
         
     
        }
        const validateForm = () => {
          let errors = {};
          const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
       
          if (!password || !regexPassword.test(password)) {
            errors.password = (
              <>
                Debe tener al menos 8 caracteres.<br />
                Incluir al menos una letra minúscula (a-z).<br />
                Incluir al menos una letra mayúscula (A-Z).<br />
                Contener al menos un número (0-9).<br />
                Contener al menos un carácter especial, como @, #, $, %, &, *, etc.
              </>
            );
          }
          if(!password || password != confirmPassword){
              errors.confirmPassword =("Invalid Password")
          }
          setErrors(errors);
          return Object.keys(errors).length === 0;
        };
 
 
    return (
      <div className="principal-contenedor-form">
      <div className="contenedor-form">
      <h1 className="">Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p className={errors.password !== "" ? "error" :"mensajeError"} id="mensajeContrasenia">{errors.password}</p>
           
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Type new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <p className={errors.confirmPassword !== "" ? "error" :"mensajeError"} id="mensajeContrasenia">{errors.confirmPassword}</p>
           
          </div>
 
 
          <button type="submit" className="btn btn-primary">
            Change Password
          </button>
        </form>
      </div>
  </div>
    );
 
}