import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "../commons/Card";

export function Search({ media }) {
  const [value, setValue] = useState("");
  const [entretenimiento, setEntretenimiento] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("Busca peli")
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/${media}?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&query=${value}&include_adult=false`
      )
      .then((res) => setEntretenimiento(res.data.results));

    setValue("");
  };
  return (
    <>
      <div
        className="  py-4 pt-5 pb-5"
        style={{ paddingLeft: 400, paddingRight: 400 }}
      >

        <form onSubmit={handleSubmit}>
          <div >
            <input
              type="text"
              placeholder="Search"
              className="form-control text-center"
              onChange={handleValue}
              value={value}
            />
          </div>
        </form>
      </div>

      <div className="row container-fluid">
        {entretenimiento.map((data, i) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default Search;
