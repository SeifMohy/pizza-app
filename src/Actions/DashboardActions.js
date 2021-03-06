import * as api from "../API";

export const ToggleCheckBox = (order, id) => {
  return {
    type: "TOGGLE",
    payload: { order, id },
  };
};

export const getOrders = () => async (dispatch) => {
  try {
    console.log("Attempting Orders");
    const response =  await api.getOrders();
    console.log(response);
    dispatch({ type: "SET_ORDERS", payload: { orders: response.data } });
  } catch (err) {
    console.log(err);
  }
};

export const orderComplete = (id) => {
  return {
    type: "COMPLETE",
    payload: { id },
  };
};
