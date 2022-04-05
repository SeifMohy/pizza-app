import React from "react";
import { Box, Typography } from "@mui/material";
import Check from "../Pictures/Check 1.png";

const OrderPlaced = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 3,
        minHeight:"90vh",
      }}
    >
      <img src={Check} />
      <Typography variant="h3">Order Placed</Typography>
      <Typography variant="subtitle2">Order Number: 132412342343123</Typography>
    </Box>
  );
};

export default OrderPlaced;
