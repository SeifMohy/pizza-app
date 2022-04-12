import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Delete } from "../Actions/OrderActions";
import { useFormik } from "formik";
//import * as yup from "yup";
import { useNavigate } from "react-router";
import * as api from "../API";

const CheckOut = () => {
  const count = useSelector((state) => state.counter);
  const ordered = count.filter((item) => item.quantity > 0);
  const subtotal = sumOfOrder(ordered);

  function sumOfOrder(arr) {
    let count = 0;
    for (const item of arr) {
      count = count + item.price * item.quantity;
    }
    return count;
  }

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      Mobile: "",
      address: "",
      City: "",
      Items: ordered,
    },
    onSubmit: async (values) => {
      formik.resetForm();
      //console.log(values);
      const response = await api.addOrder(values);
      const ordId = response.data.id;
      navigate(`/orderplaced/${ordId}`);
    },
  });

  return (
    <Grid container spacing={1} sx={{ mt: 10, minHeight: "82vh" }}>
      <Grid item xs={12} sm={7}>
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
            name="name"
            label="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
            color="secondary"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            name="Mobile"
            label="Mobile"
            onChange={formik.handleChange}
            value={formik.values.Mobile}
            color="secondary"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "70%", m: 2, mx: 5 }}
            name="address"
            label="Address"
            onChange={formik.handleChange}
            value={formik.values.Address}
            color="secondary"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="City"
            name="City"
            onChange={formik.handleChange}
            value={formik.values.City}
            color="secondary"
          ></TextField>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ display: { xs: "flex", sm: "none" }, mt: 1.5 }}>
            Subtotal: LE {subtotal}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1.5,
            mt: 4,
          }}
        >
          <Button
            sx={{ mx: 1, color: "error" }}
            variant="contained"
            color="error"
            onClick={formik.handleSubmit}
          >
            Order Now
          </Button>
          <Button
            sx={{ mx: 1 }}
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
            color="secondary"
          >
            Cancel
          </Button>
        </Box>
      </Grid>

      <Divider
        sx={{ mx: 1.5, display: { xs: "none", sm: "flex" } }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <Grid item style={{ height: "70vh", overflowY: "scroll" }} sm={4}>
        {ordered.map((item) => (
          <Card
            elevation={0}
            sx={{ display: { xs: "none", sm: "flex" }, m: 1 }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <img src={item.imageUrl} alt="Pizza" id="pizzaimg" />
              <CardContent>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Qty: {item.quantity}</Typography>
                  <IconButton onClick={() => dispatch(Decrement(item))}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => dispatch(Increment(item))}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="subtitle1">
                    Total: LE {item.price * item.quantity}
                  </Typography>
                  <IconButton onClick={() => dispatch(Delete(item))}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}

        <Divider
          sx={{ display: { xs: "none", sm: "flex" } }}
          variant="middle"
        />
        <Typography sx={{ display: { xs: "none", sm: "flex" }, mt: 1.5 }}>
          Subtotal: LE {subtotal}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckOut;
