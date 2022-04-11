import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useSelector, useDispatch} from "react-redux"
import {ToggleCheckBox} from "../Actions/DashboardActions"
import { useEffect } from "react";
import { getOrders } from "../Actions/DashboardActions";

const b1c = red[900];

const Dashboard = () => {
  const orders = useSelector((state) => state.ordered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);
console.log(orders);
  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 0, mt: 5, maxWidth: "lg", minHeight: "85vh" }}
    >
      <Grid sm={3} sx={{ py: 3, bgcolor: "#303030" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Dashboard
          </Typography>
        </Box>
        <Box sx={{ justifyContent: "center", displayDirection: "column" }}>
          <Button
            sx={{ px: 2, color: "white", display: "flex", m: 2 }}
            startIcon={<RectangleIcon fontsize="large" sx={{ color: b1c }} />}
          >
            Pending Orders
          </Button>
          <Button
            sx={{ px: 2, color: "white", display: "flex", m: 2 }}
            startIcon={<RectangleIcon fontsize="large" sx={{ color: b1c }} />}
          >
            Completed Orders
          </Button>
        </Box>
      </Grid>

      <Grid
        sm={9}
        spacing={2}
        sx={{
          mt: 3,
          display: "flex",
          flexWrap: "wrap",
          displayDirection: "row",
        }}
      >
        {orders.map((item) => {
          return (
            <Grid sm={5} sx={{ m: 1.5 }}>
              <Card>
                <Box sx={{ bgcolor: "#303030" }}>
                  <Typography align="right" sx={{ color: "white", mx: 1 }}>
                    {item.date}
                  </Typography>
                </Box>

                {item.OrderLines.map((order) => {
                  return (
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: 0,
                        m: 1,
                      }}
                    >
                      <FormControlLabel
                        label={<Typography style={{color:"black"}}>{order.menu.name} Qty: {order.quantity}</Typography>}
                        control={<Checkbox color="default" />}
                        checked={order.complete}
                        onClick={()=>dispatch(ToggleCheckBox(order ,item.id))}
                      />
                    </CardContent>
                  );
                })}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
