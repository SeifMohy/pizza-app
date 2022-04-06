let MenuItems = [
  {
    name: "Seafood",
    order: 0,
    price: "120",
    description: "Shrimp, Squid, Pineapple",
    image: "MPizza",
    id: "1",
  },
  {
    name: "Seafood",
    order: 0,
    price: "120",
    description: "Shrimp, Squid, Pineapple",
    image: "MPizza",
    id: "2",
  },
  {
    name: "Seafood",
    order: 0,
    price: "120",
    description: "Shrimp, Squid, Pineapple",
    image: "MPizza",
    id: "3",
  },
  {
    name: "Seafood",
    order: 0,
    price: "120",
    description: "Shrimp, Squid, Pineapple",
    image: "MPizza",
    id: "4",
  },
  {
    name: "Seafood",
    order: 0,
    price: "120",
    description: "Shrimp, Squid, Pineapple",
    image: "MPizza",
    id: "5",
  },
  {
    name: "Seafood",
    order: 0,
    price: "120",
    description: "Shrimp, Squid, Pineapple",
    image: "MPizza",
    id: "6",
  },
];

//const item = MenuItems.filter((a)=>{a.id === action.payload});

const counter = (state = MenuItems, action) => {
  switch (action.type) {
    case "INCREMENT":
      const filteredState = state.filter((a) => {
        return a !== action.payload;
      });
      const orderUpdate = action.payload.order = action.payload.order +1;
      const newState = [...filteredState, { ...action.payload, orderUpdate}];
      console.log(newState);
      return newState;

    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counter;
