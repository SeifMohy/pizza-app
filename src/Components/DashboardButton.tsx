import React from "react";
import { orderComplete } from "../Actions/DashboardActions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Order } from "../Types";

type dashBoardButton = {
  item: Order
}

const DashboardButton = ({ item }: dashBoardButton) => {
  const dispatch = useDispatch();

  const complete = item.OrderLines.filter(item => item.complete === true).length === item.OrderLines.length;

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => dispatch(orderComplete(item.id))}
      disabled={!complete}
    >
      Complete
    </Button>
  );
};

export default DashboardButton;
