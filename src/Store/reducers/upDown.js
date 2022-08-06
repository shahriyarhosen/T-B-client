const initialSate = 0;

const reducerFunction = (state = initialSate, action) => {
  switch (action.type) {
    case "action1":
      return state + action.payload;
    case "action2":
      return state - 1;

    default:
      return state;
  }
};

export default reducerFunction;
