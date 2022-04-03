import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { red } from "@mui/material/colors";

const b1c = red[900];

//const [selected, setSelected] = React.useState(false);

const Filters = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Button sx={{ mx: 1, color: "black" }} variant="outlined" color="error">
          POPULAR
        </Button>
        <Button sx={{ mx: 1, color: "black" }} variant="outlined" color="error">
          PIZZA
        </Button>
        <Button sx={{ mx: 1, color: "black" }} variant="outlined" color="error">
          BURGER
        </Button>
        <Button sx={{ mx: 1, color: "black" }} variant="outlined" color="error">
          CREPE
        </Button>
        <Button sx={{ mx: 1, color: "black" }} variant="outlined" color="error">
          DRINKS
        </Button>
      </Box>
    </Container>
  );
};

export default Filters;
