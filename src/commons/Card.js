import React from "react";
import { Link } from "react-router-dom";
import {addFavorites} from "../dbSimulator"

const Card = ({ data }) => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  
  return (
    <div className="col-3 mt-5" key={data.id}>
      <div className="card " style={{ width: "18rem" }}>
        <Link to={`/movieDetails/${data.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{data.original_title}</h5>
          <p className="card-text">{data.overview.slice(0, 80) + "..."}</p>
          <button
            className="btn btn-primary"
            onClick={() => addFavorites({data},user.id)}
          >
            Add To Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
