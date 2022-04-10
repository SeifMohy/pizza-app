import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { red } from "@mui/material/colors";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MPizza from "../Pictures/MPizza.png";
import { styled } from '@mui/material/styles';
import {useSelector, useDispatch} from "react-redux"


const b1c = red[900];

const Filters = ({filter, setFilter, setFilteredItems}) => {
  const count = useSelector((state => state.counter));

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(2),
      border: 1, 

      '&.Mui-disabled': {
        border: 1,
        color: "error",
        textColor: "white",
      },
      '&:not(:first-of-type)': {
        border: "1px solid",
      },
      '&:first-of-type': {
        border: "1px solid",
      },
    },
  }));
  //const [filter, setFilter] = React.useState("1");

  const handleFilter = (event, newFilter) => {
    setFilter(newFilter);
  };

  console.log(filter);

//   const filteredItems = count.filter((item)=> {
//     console.log(item.category.id)
//     return item.category.id === +filter
// });

  //console.log(filteredItems);
  // setFilteredItems(filteredItems);

  return (
    <Container maxWidth="sm">
      <StyledToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        sx={{ mt: 4}}
      >
        <ToggleButton value="1" sx={{ color: "black" }} variant="outlined" color="error"> 
          POPULAR
        </ToggleButton>
        <ToggleButton value="2" sx={{ color: "black" }} variant="outlined" color="error">
          PIZZA
        </ToggleButton>
        <ToggleButton value="3" sx={{ color: "black" }} variant="outlined" color="error">
          BURGER
        </ToggleButton>
        <ToggleButton value="4" sx={{ color: "black" }} variant="outlined" color="error">
          CREPE
        </ToggleButton>
        <ToggleButton value="5" sx={{ color: "black" }} variant="outlined" color="error">
          DRINKS
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Container>
  );
};

export default Filters;
