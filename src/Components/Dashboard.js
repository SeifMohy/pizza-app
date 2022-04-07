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

const b1c = red[900];

const orders = [
  {
    name: "seif",
    orderNumber: 1,
    order: [
      { name: "Seafood", order: 1, complete: true },
      { name: "Margrita", order: 2, complete: false },
      { name: "Peparonni", order: 1, complete: false },
    ],
    created: "3:40",
  },
  {
    name: "Mostafa",
    orderNumber: 2,
    order: [
      { name: "Seafood", order: 1, complete: false },
      { name: "Margrita", order: 2, complete: true },
      { name: "Peparonni", order: 1, complete: false },
    ],
    created: "3:40",
  },
  {
    name: "Islam",
    orderNumber: 3,
    order: [
      { name: "Seafood", order: 1, complete: false },
      { name: "Margrita", order: 2, complete: false },
      { name: "Peparonni", order: 3, complete: true },
    ],
    created: "3:40",
  },
];

const Dashboard = () => {
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
                    {item.created}
                  </Typography>
                </Box>

                {item.order.map((order) => {
                  return (
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column", p:0 , m:1 }}
                    >
                      <FormControlLabel
                        label={`${order.name} Qty:${order.order}`}
                        control={<Checkbox color="default" />}
                        checked={order.complete}
                        //onClick to dispatch check box.
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
