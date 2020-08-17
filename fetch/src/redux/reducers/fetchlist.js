const Fetchlist = (INITIAL_STATE = [], action) => {
    switch (action.type) {
        case "FETCH_LIST":
            return action.payload;
        default:
            return INITIAL_STATE;
    }
};

export default Fetchlist;