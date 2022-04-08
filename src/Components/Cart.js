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
import { useSelector, useDispatch } from "react-redux";
import {Increment, Decrement, Delete} from "../Actions/OrderActions"
import { Link } from "react-router-dom";


const Cart = ({handleClose}) => {
  const count = useSelector((state) => state.counter);
  const ordered = count.filter((item) => item.quantity > 0);
  const subtotal = sumOfOrder(ordered);

  function sumOfOrder(arr) {
    let count = 0;
    for (const item of arr) {
      count = count + (item.price * item.quantity);
    }
    return count;
  }

  const dispatch = useDispatch();

  return (
    <div>
      <Grid sm={4}>
        {ordered.map((item) => (
          <Card elevation={0} sx={{ display: "flex", m: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <img src={item.image} />
              <CardContent>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Qty: {item.quantity}</Typography>
                  <IconButton onClick={()=>dispatch(Decrement(item))}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={()=>dispatch(Increment(item))}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Total: LE {item.price*item.quantity}</Typography>
                  <IconButton onClick={()=>dispatch(Delete(item))}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}

        <Divider variant="middle" />
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            flexDirection: "column",
            m: 1,
          }}
        >
          <Typography sx={{ mt: 1.5 }}>Subtotal: LE {subtotal}</Typography>
          <Link to="/checkout" style={{textDecoration:"none"}} >
          <Button
            sx={{ mb: 2, color: "error" }}
            variant="contained"
            color="error"
            fullWidth
            OnClick={{handleClose}}
          >
            Check Out
          </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
};

export default Cart;
