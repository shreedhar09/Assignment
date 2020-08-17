import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./ComponentCSS/player.css";
import "./ComponentCSS/playlist.css";
import "./ComponentCSS/SearchBox.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
