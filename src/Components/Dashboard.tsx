import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";
import { ToggleCheckBox } from "../Actions/DashboardActions";
import { useEffect } from "react";
import { getOrders } from "../Actions/DashboardActions";
import DashboardButton from "./DashboardButton";
import { orderComplete } from "../Actions/DashboardActions";
import Timer from "./Timer";
import { RootState } from "../index";
import { Order, OrderLine } from "../Types";


const b1c = red[900];

const Dashboard = () => {
  const orders = useSelector((state : RootState) => state.ordered);
  const dispatch = useDispatch();

  const [view, setView] = React.useState(false);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const filteredOrders = orders.filter((order: Order) => order.complete === view);

  console.log(orders);

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 0, mt: 7, mx: 0, minHeight: "85vh" }}
    >
      <Grid item sm={3} sx={{ py: 3, bgcolor: "#303030" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Dashboard
          </Typography>
        </Box>
        <Box sx={{ justifyContent: "center", displayDirection: "column" }}>
          <Button
            sx={{ px: 2, color: "white", display: "flex", m: 2 }}
            startIcon={<RectangleIcon fontSize="large" sx={{ color: b1c }} />}
            onClick={() => setView(false)}
          >
            Pending Orders
          </Button>
          <Button
            sx={{ px: 2, color: "white", display: "flex", m: 2 }}
            startIcon={<RectangleIcon fontSize="large" sx={{ color: b1c }} />}
            onClick={() => setView(true)}
          >
            Completed Orders
          </Button>
        </Box>
      </Grid>

      <Grid
        item
        container
        sm={9}
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          mt: 3,
        }}
      >
        {filteredOrders.map((item: Order) => {
          return (
            <Grid item key={item.id} sm={3.5} sx={{ m: 1.5}}>
              <Card>
                <Timer item={item} />
                {item.OrderLines.map((order: OrderLine) => {
                  return (
                    <CardContent
                      key={order.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: 0,
                        m: 1,
                      }}
                    >
                      <FormControlLabel
                        label={
                          <Typography style={{ color: "black" }}>
                            {order.menu.name} Qty: {order.quantity}
                          </Typography>
                        }
                        control={<Checkbox color="default" />}
                        checked={order.complete}
                        onClick={() => dispatch(ToggleCheckBox(order, item.id))}
                      />
                    </CardContent>
                  );
                })}
                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <DashboardButton item={item}/>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
