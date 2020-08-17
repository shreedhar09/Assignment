export const yearReducer = (state = [], action) => {
  switch (action.type) {
    case "getAge":
      return action.payload;

    default:
      return state;
  }
};
