import {
  FETCH_POST_REQUEST,
  FETCH_POST_REQUEST_SUCCESS,
  FETCH_POST_ERROR
} from "../Action/postAction";

const initialState = {
  loading: true,
  PostList: [],
  error: ""
};

const PostReducer = (state = initialState, action) => {
  //console.log(action);

  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POST_REQUEST_SUCCESS:
      return {
        loading: false,
        PostList: action.payload,
        error: ""
      };
    case FETCH_POST_ERROR:
      return {
        loading: false,
        PostList: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default PostReducer;
