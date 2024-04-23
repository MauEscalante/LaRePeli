import React, { useEffect, useState } from "react";
import { getFavorites, getWatchLater, getVistas } from "../dbSimulator";
import Card from "../commons/Card";

const Profile = () => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const [favorito, setFavorito] = useState([]); 
  const [verDespues, setVerDespues] = useState([]);
  const [vistas, setVistas] = useState([]);

  useEffect(() => {
    const fetchList = () => {
      setFavorito(getFavorites(user.id))
      setVerDespues(getWatchLater(user.id))
      setVistas(getVistas(user.id))
       
    };

    fetchList();
  }, []);

  

  return (
    <>
      {user ? (
        <>
          <div className="row p-2 " style={{ backgroundColor: "#000016" }}>
            <div className="col-3 ">
              <img
                src={`https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png}`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="col-9">
              <h1 className="text-light">
                {(user.name + " " + user.lastname).toUpperCase()}
              </h1>
            </div>
          </div>

          <div className="container text-center">
            <h1 className="pt-5">Favoritos</h1>
            <div className="row">
              {favorito.map((data, i) => (
                <Card data={data} key={data.id} />
              ))}
            </div>
          </div>

          <div className="container text-center">
            <h1 className="pt-5">Ver despues</h1>
            <div className="row">
              {verDespues.map((data, i) => (
                <Card data={data} key={data.id} />
              ))}
            </div>
          </div>

          <div className="container text-center">
            <h1 className="pt-5">Vistas</h1>
            <div className="row">
              {vistas.map((data, i) => (
                <Card data={data} key={data.id}/>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="row p-2 " style={{ backgroundColor: "#111d4a" }}>
          <div className="col-3 ">
            <img
              src={`https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png}`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-9">
            <h1 className="text-light">
              USER NOT FOUND
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
