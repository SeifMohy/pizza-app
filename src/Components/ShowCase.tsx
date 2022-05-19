import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SCPizza from "../Pictures/SCPizza.png";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { red } from "@mui/material/colors";

const b1c = red[900];

const ShowCase = () => {

  return (
    <Box sx={{ pt: 11, bgcolor: "#303030" }}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center" }}
        >
          <Grid
            sm={6}
            sx={{
              py: 5,
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "white",
                pl: 5,
              }}
              variant="h3"
            >
              ENJOY OUR DELICIOUS <span>FOOD</span> 
            </Typography>

            <Button
              sx={{ px: 2, color: "white", pl: 5 }}
              startIcon={<RectangleIcon fontSize="large" sx={{ color: b1c }} />}
            >
              Buy 1 Get 2
            </Button>
            <Button
              sx={{ px: 2, color: "white", pl: 5 }}
              startIcon={<RectangleIcon fontSize="large" sx={{ color: b1c }} />}
            >
              Order Online Now
            </Button>
          </Grid>
          <Grid sm={6} sx={{ p: 5 }}>
            <img src={SCPizza} id="SCpizzaimg" alt="ShowCase Pizza"/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowCase;
