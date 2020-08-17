import { createStore, applyMiddleware, combineReducers } from "redux";
import { yearReducer } from "../Reducer/CalculatorReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({ year: yearReducer });
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
