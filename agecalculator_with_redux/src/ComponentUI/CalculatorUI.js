import React, { Component } from "react";
import { calculateAge } from "../Redux/Action/CalculatorAction";
import { connect } from "react-redux";

export class CalculatorUI extends Component {
  render() {
    return (
      <div className="container-fluid backGroundC">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 emptyContainer" />

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <form className="loginContainer">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput" className="lbldesc">
                  What's your age??
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="txtInputBirthDate"
                  name="age"
                  value={this.props.inputAge}
                  onChange={this.props.inputAgeOnChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-default btn-block btnsuccess"
                id="btnSubmit"
                onClick={() => this.props.calculateAge(this.props.inputAge)}
              >
                Calculate
              </button>
              <div className="form-group op">
                <label id="lblhead">
                  Your age is...<h3>
                    {this.props.CalculatedYear[0]} years,{" "}
                    {this.props.CalculatedYear[1]} months,{" "}
                    {this.props.CalculatedYear[2]} days
                  </h3>
                </label>
              </div>
            </form>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 emptyContainer" />
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  console.log(state);

  return {
    CalculatedYear: state.year
  };
};

export default connect(mapStateToProps, { calculateAge })(CalculatorUI);
