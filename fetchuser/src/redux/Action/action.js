import axios from "axios";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_REQUEST_SUCCESS = "FETCH_USERS_REQUEST_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const FETCH_USERS_REQUESTAC = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const FETCH_USERS_REQUEST_SUCCESSAC = data => {
  return {
    type: FETCH_USERS_REQUEST_SUCCESS,
    payload: data
  };
};

export const FETCH_USERS_ERRORAC = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  };
};

export const FetchUserData = () => {
  return function(dispatch) {
    dispatch(FETCH_USERS_REQUESTAC());
    axios
      .get(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => {
        dispatch(FETCH_USERS_REQUEST_SUCCESSAC(response.data));
      })
      .catch(error => dispatch(FETCH_USERS_ERRORAC(error.message)));
  };
};
