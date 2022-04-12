import React from "react";
import { Container } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from '@mui/material/styles';


const Filters = ({filter, setFilter}) => {

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0),
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

  const handleFilter = (event, newFilter) => {
    setFilter(newFilter);
  };

 // console.log(filter);

  return (
    <Container maxWidth="sm">
      <StyledToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        sx={{display: "flex", justifyContent: "center", mt: 4}}
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
