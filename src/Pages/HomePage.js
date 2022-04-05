import React from "react";
import ShowCase from "../Components/ShowCase";
import Filters from "../Components/Filters";
import Menu from "../Components/Menu";

const HomePage = () => {
  return (
    <div>
      <ShowCase />
      <Filters />
      <Menu />
    </div>
  );
};

export default HomePage;
