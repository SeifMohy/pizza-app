const orders = [
  {
    name: "seif",
    orderNumber: 1,
    order: [
      { name: "Seafood", order: 1, complete: true, id: 1 },
      { name: "Margrita", order: 2, complete: false, id: 2 },
      { name: "Peparonni", order: 1, complete: false, id: 3 },
    ],
    created: "3:40",
  },
  {
    name: "Mostafa",
    orderNumber: 2,
    order: [
      { name: "Seafood", order: 1, complete: false, id: 4 },
      { name: "Margrita", order: 2, complete: true, id: 5 },
      { name: "Peparonni", order: 1, complete: false, id: 6 },
    ],
    created: "3:40",
  },
  {
    name: "Islam",
    orderNumber: 3,
    order: [
      { name: "Seafood", order: 1, complete: false, id: 7 },
      { name: "Margrita", order: 2, complete: false, id: 8 },
      { name: "Peparonni", order: 3, complete: true, id: 9 },
    ],
    created: "3:40",
  },
];
const ordered = (state = orders, action) => {
  switch (action.type) {
    case "TOGGLE":
      const newState= state.map((item)=>{
        if(item.orderNumber !== action.id){
          return item
        }
        const newOrder= item.order.map((line)=>{
          if(line.id !== action.payload.id)
            return line
          return {...line, complete: !line.complete}
        })
        return {...item, order: newOrder}
      })
      return newState;
    default:
      return state;
  }
};

export default ordered;
