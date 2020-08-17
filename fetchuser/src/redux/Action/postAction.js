import axios from "axios";
export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_REQUEST_SUCCESS = "FETCH_POST_REQUEST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export const FETCH_POST_REQUESTAC = () => {
  return {
    type: FETCH_POST_REQUEST
  };
};

export const FETCH_POST_REQUEST_SUCCESSAC = PostList => {
  return {
    type: FETCH_POST_REQUEST_SUCCESS,
    payload: PostList
  };
};

export const FETCH_POST_ERRORAC = error => {
  return {
    type: FETCH_POST_ERROR,
    payload: error
  };
};

export const FetchPostData = () => {
  return function(dispatch) {
    dispatch(FETCH_POST_REQUESTAC());
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        dispatch(FETCH_POST_REQUEST_SUCCESSAC(response.data));
      })
      .catch(error => dispatch(FETCH_POST_ERRORAC(error.message)));
  };
};
