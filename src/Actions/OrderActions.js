import * as api from "../API";

export const Increment = (item) => {
  return {
    type: "INCREMENT",
    payload: item,
  };
};
export const Decrement = (item) => {
  return {
    type: "DECREMENT",
    payload: item,
  };
};
export const Delete = (item) => {
  return {
    type: "DELETE",
    payload: item,
  };
};

export const getMenu = () => async (dispatch) => {
  try {
    console.log("attempting menu");
    const response = await api.getMenu();
    console.log(response);
    dispatch({ type: "SET_PRODUCTS", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
