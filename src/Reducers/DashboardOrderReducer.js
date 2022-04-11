const ordered = (state = [], action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return action.payload.map((order) =>{
          return {...order, OrderLines: order.OrderLines.map((line)=>{
            return {...line, complete: false} 
          })}
      })
    case "TOGGLE":
      const newState= state.map((order)=>{
        if(order.id !== action.id){
          return order
        }
        const newOrder= order.OrderLines.map((line)=>{
          if(line.id !== action.payload.id)
            return line
          return {...line, complete: !line.complete}
        })
        return {...order, OrderLines: newOrder}
      })
      return newState;
    default:
      return state;
  }
};

export default ordered;
