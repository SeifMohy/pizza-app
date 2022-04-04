import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MPizza from "../Pictures/MPizza.png";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Menu = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          justify="center"
          sx={{ alignItems: "center" }}
        >

          <Grid sm={4}>
            <Card sx={{ display: "flex", m:1}}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={MPizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>1</Typography>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid sm={4}>
            <Card sx={{ display: "flex", m:1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={MPizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>1</Typography>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid sm={4}>
            <Card sx={{ display: "flex", m:1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={MPizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>1</Typography>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid sm={4}>
            <Card sx={{ display: "flex", m:1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={MPizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>1</Typography>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>


        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
