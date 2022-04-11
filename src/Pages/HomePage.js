import React from "react";
import ShowCase from "../Components/ShowCase";
import Filters from "../Components/Filters";
import Menu from "../Components/Menu";
import {useSelector} from "react-redux";

const HomePage = () => {
  const [filter, setFilter] = React.useState("1");

  const count = useSelector((state => state.counter));

  const filteredItems = count.filter((item) => {
    //console.log(item.category.id);
    return item.category.id === +filter;
  });

  return (
    <div>
      <ShowCase />
      <Filters
        filter={filter}
        setFilter={setFilter}
      />
      <Menu filteredItems={filteredItems}/>
    </div>
  );
};

export default HomePage;
