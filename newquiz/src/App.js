import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TakeaSurvey from "./components/TakeaSurvey";
import { Route, Switch } from "react-router-dom";
import Questions from "./components/Questions";


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      QuestionData: []
    };
  }

  async componentDidMount() {
    let data = await axios.get(
      `https://www.mocky.io/v2/56fcf6871000000e13aed252`
    );
    this.setState({ QuestionData: data.data.slice(0, 10) });
  }

  render() {
    //console.log(this.state.QuestionData);

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={TakeaSurvey} />
          <Route path="/Survey" exact component={TakeaSurvey} />
          <Route
            path="/Question"
            component={() =>
              <Questions QuestionData={this.state.QuestionData} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
