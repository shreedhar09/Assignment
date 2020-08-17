import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer, playReducer } from "../Reducer/YoutubeAPIReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  videolist: reducer, //Got Error Here.
  playVideo: playReducer //change.
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
