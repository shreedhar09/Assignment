import { createStore, applyMiddleware, combineReducers } from "redux";
import Reducer from "../Reducer/Reducer";
import PostReducer from "../Reducer/PostReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  UserFetchList: Reducer,
  PostFetchList: PostReducer
});
const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
