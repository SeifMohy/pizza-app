import React from "react";
import { Box, Typography } from "@mui/material";
import Check from "../Pictures/Check 1.png";
import { useParams } from "react-router-dom";


const OrderPlaced = () => {
  const {ordId} = useParams();
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
      <img src={Check} alt="check"/>
      <Typography variant="h3">Order Placed</Typography>
      <Typography variant="subtitle2">Order Number: {ordId} </Typography>
    </Box>
  );
};

export default OrderPlaced;
