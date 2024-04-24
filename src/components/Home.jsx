import Search from "./Search";
import React,{useEffect,useState} from "react";
import axios from "axios";
import Card from "../commons/Card";
import CardActor from "../commons/CardActor"
import "../Style/Home.css"

const Home = ({ media, entretenimiento }) => {

  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/${media}/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
    )
      .then(res => setPopulars(res.data.results))

  }, [media]);

  return (
    <>
      <Search media={media} />
      <div className="container text-center ">
        <h1 className="pt-5">{entretenimiento} populares</h1>
        <div className="contenedor-populars">
          {populars.map((data) => (
            media==="person"?  <CardActor data={data} key={data.id}/> : <Card data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
