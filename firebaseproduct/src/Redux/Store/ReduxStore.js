import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  FetchAuthReducer,
  FetchFireBaseDataReducer
} from "../Reducer/ProductReducer";

let rootReducer = combineReducers({
  FetchedAuthData: FetchAuthReducer,
  FetchedFireBaseData: FetchFireBaseDataReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
