const ordered = (state = false, action) => {
  switch (action.type) {
    case "ORDERED":
      return !state;
    default:
      return state;
  }
};

export default ordered;