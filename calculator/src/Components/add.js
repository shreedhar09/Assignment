import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstInput: 0, //0 beacause [+] will consider [""] as Concatination
      secondInput: 0,
      output: 0
    };
  }
  getinputFirst = e => {
    this.setState({ FirstInput: e.target.value });
    console.log(e.target.value);
  };
  getinputSecond = e => {
    this.setState({ secondInput: e.target.value });
    console.log(e.target.value);
  };

  add = e => {
    let addition =
      Number(this.state.FirstInput) + Number(this.state.secondInput); //Conversion String-->Number
    this.setState({ output: addition });
    console.log(addition);
    console.log(typeof this.state.FirstInput);

    e.preventDefault();
  };

  render() {
    return (
      <div className="container-fluid BackGround">
        <div className="row ">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 heading">
            <h1 className="sub">Adding Two Numbers</h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>

        <div className="row heading ">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 box">
            <form class="form-inline">
              <input
                type="number"
                className="form-control ipbox"
                placeholder="Enter a Number"
                value={this.state.FirstInput}
                onChange={this.getinputFirst}
              />
              <input
                type="number"
                className="form-control ipbox"
                placeholder="Enter a Number"
                value={this.state.secondInput}
                onChange={this.getinputSecond}
              />
            </form>
            <form>
              <center>
                <button
                  type="submit"
                  className="btn btn-dark btnSub"
                  onClick={this.add}
                >
                  Add Them
                </button>
              </center>
            </form>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>

        <div className="row heading">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <h1 className="op">
              {this.state.output}
            </h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>
      </div>
    );
  }
}

export default Add;
