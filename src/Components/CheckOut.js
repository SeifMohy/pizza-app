import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MPizza from "../Pictures/MPizza.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CheckOut = () => {
  return (
    <Grid container spacing={1} sx={{ mt: 3 }}>
      <Grid sm={7}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <TextField
            variant="standard"
            sx={{ width: "70%", m: 2, mx: 5 }}
            label="Name"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="Mobile"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "70%", m: 2, mx: 5 }}
            label="Address"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="City"
          ></TextField>
        </Box>

        <Box
          sx={{
            p:1.5,
            alignItems: "center",
          }}
        >
          <Button
            sx={{ mx: 1, color: "error" }}
            variant="contained"
            color="error"
          >
            Order Now
          </Button>
          <Button
            sx={{ mx: 1, color: "black" }}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
        </Box>
      </Grid>

      <Divider
        sx={{ mx: 1.5 }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <Grid sm={4}>
        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={MPizza} />
            <CardContent>
              <Typography component="div" variant="h5">
                Seafood
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Qty: 1</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Total: LE 120.00</Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={MPizza} />
            <CardContent>
              <Typography component="div" variant="h5">
                Seafood
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Qty: 1</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Total: LE 120.00</Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={MPizza} />
            <CardContent>
              <Typography component="div" variant="h5">
                Seafood
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Qty: 1</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Total: LE 120.00</Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Divider variant="middle" />
        <Typography sx={{ mt: 1.5 }}>Subtotal: LE 360.00</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckOut;
