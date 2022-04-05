import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { red } from "@mui/material/colors";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MPizza from "../Pictures/MPizza.png";


const MenuItems=[
    {name:"Seafood", category:"Popular", order:"0", price:"120", description:"Shrimp, Squid, Pineapple", image:MPizza, id:"1"},
    {name:"Seafood", category:"Pizza", order:"0", price:"120", description:"Shrimp, Squid, Pineapple", image:MPizza, id:"2"},
    {name:"Seafood", category:"Burger", order:"0", price:"120", description:"Shrimp, Squid, Pineapple", image:MPizza, id:"3"},
    {name:"Seafood", category:"Popular", order:"0", price:"120", description:"Shrimp, Squid, Pineapple", image:MPizza, id:"4"},
    {name:"Seafood", category:"Popular", order:"0", price:"120", description:"Shrimp, Squid, Pineapple", image:MPizza, id:"5"},
    {name:"Seafood", category:"Popular", order:"0", price:"120", description:"Shrimp, Squid, Pineapple", image:MPizza, id:"6"},
]

const b1c = red[900];

//make an if statement to change items sent to menu according to pressed filter button

const Filters = () => {
  const [filter, setFilter] = React.useState("Popular");

  const handleFilter = (event, newFilter) => {
    setFilter(newFilter);
  };

  const filteredItems = MenuItems.filter((item)=> item.category === filter);
console.log(filteredItems)
  return (
    <Container maxWidth="sm">
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        sx={{ mt: 4 }}
      >
        <ToggleButton value="Popular" sx={{ color: "black" }} variant="outlined" color="error"> 
          POPULAR
        </ToggleButton>
        <ToggleButton value="Pizza" sx={{ color: "black" }} variant="outlined" color="error">
          PIZZA
        </ToggleButton>
        <ToggleButton value="Burger" sx={{ color: "black" }} variant="outlined" color="error">
          BURGER
        </ToggleButton>
        <ToggleButton value="Crepe" sx={{ color: "black" }} variant="outlined" color="error">
          CREPE
        </ToggleButton>
        <ToggleButton value="Drinks" sx={{ color: "black" }} variant="outlined" color="error">
          DRINKS
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};

export default Filters;
