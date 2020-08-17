import React, { Component } from "react";
import CalculatorUI from "../ComponentUI/CalculatorUI";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateInput: "",
      yearOP: 0,
      monthOP: 0,
      dayOP: 0
    };
  }

  setDate = e => {
    this.setState({ dateInput: e.target.value });
  };

  calAge = date => {
    let dateObj = new Date();
    let convertedAgeToString = date.toString();
    let sliceConvertedYear = convertedAgeToString.slice(0, 4);
    let sliceConvertedMonth = convertedAgeToString.slice(5, 7);
    let sliceConvertedDay = convertedAgeToString.slice(8, 10);
    let convertYear = dateObj.getFullYear() - sliceConvertedYear;
    let convertMonth = dateObj.getMonth() + 1 - sliceConvertedMonth;
    let convertDay = dateObj.getDate() - sliceConvertedDay;

    this.setState({ yearOP: convertYear });
    this.setState({ monthOP: convertMonth });
    this.setState({ dayOP: convertDay });
  };

  render() {
    return (
      <React.Fragment>
        <CalculatorUI
          getDate={this.state.dateInput}
          changeDate={this.setDate}
          CalculateAge={() => this.calAge(this.state.dateInput)}
          year={this.state.yearOP}
          month={this.state.monthOP}
          day={this.state.dayOP}
        />
      </React.Fragment>
    );
  }
}

export default Calculator;
