export const FetchAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "FetchAuthData":
      return action.payload;

    default:
      return state;
  }
};

export const FetchFireBaseDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "Fetch_Data":
      return action.payload;

    default:
      return state;
  }
};
