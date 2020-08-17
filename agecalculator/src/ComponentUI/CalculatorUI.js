import React from "react";

function CalculatorUI(props) {
  console.log(props);

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
                value={props.getDate}
                onChange={props.changeDate}
              />
            </div>
            <button
              type="button"
              className="btn btn-default btn-block btnsuccess"
              id="btnSubmit"
              onClick={props.CalculateAge}
            >
              Calculate
            </button>
            <div className="form-group op">
              <label id="lblhead">
                Your age is...<h3>
                  {props.year} years, {props.month} months, {props.day} days
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

export default CalculatorUI;
