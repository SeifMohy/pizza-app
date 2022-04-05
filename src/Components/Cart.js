import React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
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
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  return (
    <div>
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
                  <DeleteIcon />
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
                  <DeleteIcon />
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
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Divider variant="middle" />
        <Typography sx={{ mt: 1.5 }}>Subtotal: LE 360.00</Typography>
        <Button
          sx={{ mb: 2, color: "error"}}
          variant="contained"
          color="error"
        >
          Check Out
        </Button>
      </Grid>
    </div>
  );
};

export default Cart;
