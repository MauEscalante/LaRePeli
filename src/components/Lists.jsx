
import React, { useEffect, useState } from "react";
import { getFavorites, getWatchLater,getVistas } from "../dbSimulator";
import Card from "../commons/Card";

const List = ({ type, title }) => {
  const [lists, setList] = useState([]);
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  useEffect(() => {
    const fetchList = () => {
      let fetchedList
      if (type === "Favorites") {
         fetchedList = getFavorites(user.id)
      } else if (type === "VerDespues"){
         fetchedList = getWatchLater(user.id)
      }else if (type==="person"){
         fetchedList = getVistas(user.id)
      }
      setList(fetchedList)
    };

    fetchList();
  }, []);



  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">{title}</h1>
        <div className="row">
          {lists.map((data, i) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
