import { combineReducers } from "redux";
import Fetchlist from "./fetchlist";
import FetchUser from "./fetchuser";
const reducers = combineReducers({ postlist: Fetchlist, postuser: FetchUser });
export default reducers;
