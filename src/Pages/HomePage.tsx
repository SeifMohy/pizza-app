import React from "react";
import ShowCase from "../Components/ShowCase";
import Filters from "../Components/Filters";
import Menu from "../Components/Menu";
import {useSelector} from "react-redux";
import { MenuItem, MenuItems } from "../Types";
import {RootState} from "../index"
import { Box } from "@mui/material";

const HomePage = () => {
  const [filter, setFilter] = React.useState("1");

  const count = useSelector(((state : RootState) => state.counter));

  const filteredItems: MenuItems = count.filter((item : MenuItem) => {
    console.log(item);
    return item.category.id === +filter;
  });

  return (
    <Box sx={{minHeight: "85vh"}}>
      <ShowCase />
      <Filters
        filter={filter}
        setFilter={setFilter}
      />
      <Menu filteredItems={filteredItems}/>
    </Box>
  );
};

export default HomePage;
