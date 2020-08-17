import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Qus from "./component/qus";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./component/nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route path="/Qus" component={Qus} />
        </Switch>

        <div />
      </React.Fragment>
    );
  }
}

export default App;
