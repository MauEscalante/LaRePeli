import { useState,useEffect } from "react";
import { useNavigate,useSearchParams } from "react-router-dom";
import axios from "axios";

export function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [searchParams] = useSearchParams ();
    const navigate = useNavigate();
    const token = localStorage.getItem("token") || searchParams.get("email");
    

   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password===confirmPassword){
          axios.put("http://localhost:3000/user/",
              {password:password },
              {headers: { "x-acces-token": token }},
            
        )
          .then(() => navigate("/login"))
          .catch((e) => console.log(e));
        }else{
          alert("Passwords not match")
        }
       
         
      
        }
    

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
               
              </div>


              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </form>
          </div>
      </div>
    );

}