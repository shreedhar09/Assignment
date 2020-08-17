const FetchUser = (INITIAL_STATE = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload;
    default:
      return INITIAL_STATE;
  }
};

export default FetchUser;
