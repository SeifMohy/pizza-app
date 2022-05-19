
const counter = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
    return action.payload.map((item) =>{
        return {...item, quantity: 0}
    })
    case "INCREMENT":
      const filteredState = state.filter((a) => {
        return a !== action.payload;
      });
      const quantityUpdate = (action.payload.quantity = action.payload.quantity + 1);
      const newState = [...filteredState, { ...action.payload, quantityUpdate }];
      console.log(newState);
      return newState.sort((a, b) => a.id - b.id);

    case "DECREMENT":
      const filteredStateD = state.filter((a) => {
        return a !== action.payload;
      });
      const quantityUpdateD = (action.payload.quantity = action.payload.quantity - 1);
      const newStateD = [
        ...filteredStateD,
        { ...action.payload, quantityUpdateD },
      ];
      console.log(newStateD);
      return newStateD.sort((a, b) => a.id - b.id);

    case "DELETE":
      const filteredStateDel = state.filter((a) => {
        return a !== action.payload;
      });
      const newStateDel = [
        ...filteredStateDel,
        { ...action.payload, quantity: 0 },
      ];
      console.log(newStateDel);
      return newStateDel.sort((a, b) => a.id - b.id);

    default:
      return state;
  }
};

export default counter;
