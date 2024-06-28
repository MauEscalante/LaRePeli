
import React, { useEffect, useState } from "react";
import { getFavorites, getWatchLater,getWatched } from "../API/listHandler";
import Card from "../commons/Card";
import "../Style/Lists.css"

const List = ({ type, title }) => {
  const [lists, setList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchList = async () => {
      if (type === "Favorites") {
         setList(await getFavorites());
      } else if (type === "VerDespues"){
         setList(await getWatchLater());
      }else if (type==="Vistas"){
        setList(await getWatched());
      }
      
    };

    fetchList();
  },[type, token,lists]);



  return (
    <>
      {lists.length === 0 ?
      <div className="contenedor-lists-oculto">
        <div className="contenedor-titulo"><h1>{title} </h1></div>
        <div className="contenedor-film-oculto">
 
        <p>List is empty</p>
       </div>
      </div>
      :
      <div className="contenedor-lists">
        <div className="contenedor-titulo"><h1>{title} </h1></div>
        <div className="contenedor-film">
      {lists.map((data, i) => (
      <Card data={data} media = {data.media} key={data.id} />
     
    ))}
      </div>
    </div> }
    </>
  );
};

export default List;
