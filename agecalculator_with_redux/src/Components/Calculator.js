import React, { Component } from "react";

import CalculatorUI from "../ComponentUI/CalculatorUI";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getInput: ""
    };
  }

  getInputOnChange = e => {
    this.setState({ getInput: e.target.value });
  };

  render() {
    //console.log(typeof this.state.getInput);

    return (
      <React.Fragment>
        <CalculatorUI
          inputAge={this.state.getInput}
          inputAgeOnChange={this.getInputOnChange}
        />
      </React.Fragment>
    );
  }
}

export default Calculator;
