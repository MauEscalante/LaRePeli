import Search from "./Search";
import React from "react";
import Populars from "./Populars";

const Home = ({ populars, media, entretenimiento }) => {
  return (
    <>
      <Search media={media}/>
      <Populars populars={populars} entretenimiento={entretenimiento}/>
    </>
  );
};

export default Home;
