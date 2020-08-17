import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./ComponentCSS/AdminPanel.css";
import "./ComponentCSS/Login.css";
import "./ComponentCSS/CRUDProduct.css";
import * as serviceWorker from "./serviceWorker";
import store from "./Redux/Store/ReduxStore";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
