import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ChangePassoword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const userNoparse = localStorage.getItem("user");
    const user = JSON.parse(userNoparse);

    const handdlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handdleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    //ESTO VA A LLAMAR AL BACKEND; PARA PRIMER ENTREGA ESTA COMENTADO Y UTILIZAMOS LISTAS CON LOS USUARIOS 
    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3000/api/users/changePassword", {
            password,
            confirmPassword
          })
    
          .then(() => navigate("/"))
          .catch(() => alert("Error en el cambio de contraseña"));
          navigate("/")
      };
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
    }

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
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword1"
                                    onChange={handdlePassword}
                                    value={password}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirmar contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword2"
                                    onChange={handdleConfirmPassword}
                                    value={confirmPassword}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                cambiar
                            </button>

                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );

}