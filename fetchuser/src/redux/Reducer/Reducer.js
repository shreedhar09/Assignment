import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST_SUCCESS,
  FETCH_USERS_REQUEST
} from "../Action/action";

const initialState = {
  loading: true,
  UsersList: [],
  error: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_REQUEST_SUCCESS:
      return {
        loading: false,
        UsersList: action.payload,
        error: ""
      };

    case FETCH_USERS_ERROR:
      return {
        loading: false,
        UsersList: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
