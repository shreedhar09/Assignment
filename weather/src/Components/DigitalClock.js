import React, { Component } from "react";

export class DigitalClock extends Component {
  constructor(props) {
    super(props);

    /* this.getHrs = this.getHrs.bind(this)
     this.getMins = this.getMins.bind(this)
     this.getSecs = this.getSecs.bind(this) */
  }

  state = {
    hours: new Date(),
    mins: new Date(),
    seconds: new Date(),
    ampm: "am"
  };

  getHrs = () => {
    let Time = new Date();
    let hrs = Time.getHours();

    if (hrs > 12) {
      hrs = hrs - 12;
      this.setState({ hours: hrs, ampm: "pm" });
    } else this.setState({ hours: hrs });
  };

  getMins = () => {
    let Time = new Date();
    let min = Time.getMinutes();
    min = min < 10 ? `0${min}` : min;
    this.setState({ mins: min });
  };

  getSecs = () => {
    let Time = new Date();
    let sec = Time.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;
    this.setState({ seconds: sec });
  };

  componentDidMount() {
    setInterval(() => {
      this.getHrs();
    }, 1000);
    setInterval(() => {
      this.getMins();
    }, 1000);
    setInterval(() => {
      this.getSecs();
    }, 1000);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="col-sm-12 col-md-12 col-lg-12 box">
            <h1 className="content">
              {this.state.hours.toString()}
            </h1>
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="col-sm-12 col-md-12 col-lg-12 box">
            <h1 className="content">
              {this.state.mins.toString()}
            </h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="col-sm-12 col-md-12 col-lg-12 box">
            <h1 className="content">
              {this.state.seconds.toString()}
            </h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="col-sm-12 col-md-12 col-lg-12 box">
            <h1 className="content">
              {this.state.ampm}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default DigitalClock;
