const ordered = (state = [], action) => {
  switch (action.type) {
    case "SET_ORDERS":
      console.log(action.payload)
      return action.payload.orders.map((order) => {
        return {
          ...order,
          complete: false,
          OrderLines: order.OrderLines.map((line) => {
            return { ...line, complete: false };
          }),
        };
      });
    case "TOGGLE":
      const newState = state.map((order) => {
        if (order.id !== action.payload.id) {
          return order;
        }
        const newOrder = order.OrderLines.map((line) => {
          if (line.id !== action.payload.order.id) return line;
          return { ...line, complete: !line.complete };
        });
        return { ...order, OrderLines: newOrder };
      });
      return newState;
    case "COMPLETE":
      const completedState = state.map((order) => {
        if (+order.id === +action.payload.id) {
          return { ...order, complete: true };
        }
        return order;
      });
      console.log(completedState);
      return completedState;
    default:
      return state;
  }
};

export default ordered;
