
import React, { useEffect, useState } from "react";
import { getFavorites, removeToFavorites, getWatchLater, removeToWatchLater } from "../dbSimulator";

const List = ({ type }) => {
  const [lists, setList] = useState([]);
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  useEffect(() => {
    const fetchList = () => {
      const fetchedList = type == "Favorites" ? getFavorites(user.id) : getWatchLater(user.id)
      setList(fetchedList);
    };

    fetchList();
  }, []);

  const handleRemoveFavorite = async (id) => {
    type == "Favorites" ?  removeToFavorites(id, user.id) : removeToWatchLater(user.id)
    

    const updatedList = lists.filter((movie) => movie.movie_id !== id);
    setList(updatedList);
  };
  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">{type}</h1>
        <div className="row">
          {lists.map((data, i) => (
            <div className="col-3 mt-5" key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.img}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">
                    {data.description.slice(0, 80) + "..."}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFavorite(data.movie_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
