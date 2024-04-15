
import React from "react";
import Card from "../commons/Card";

const Populars = ({ populars, entretenimiento}) => {


  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">{entretenimiento} populares</h1>
        <div className="row">
          {populars.map((data) => (
            <Card data={data} key={data.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Populars;
