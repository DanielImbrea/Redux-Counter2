const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "DOUBLE-INCREMENT":
      return { counter: state.counter + 2 };
    case "DOUBLE-DECREMENT":
      return { counter: state.counter - 2 };
    case "TRIPLE-INCREMENT":
      return { counter: state.counter + 3 };
    case "TRIPLE-DECREMENT":
      return { counter: state.counter - 3 };
    default:
      return state;
  }
}

export default rootReducer;
