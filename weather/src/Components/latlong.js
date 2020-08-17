import React, { Component } from "react";
import DigitalClock from "./DigitalClock";
import DetectWeather from "./DetectWeather";
export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Latitude: "",
      error: ""
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ Latitude: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ error: err.message });
      }
    );
  }
  render() {
    if (this.state.Latitude && !this.state.error) {
      return (
        <div className="BackGround">
          <DetectWeather lat={this.state.Latitude} />
        </div>
      );
    }
    if (!this.state.Latitude && this.state.error) {
      return (
        <div className="BackGround">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <h2 className="neutro">
                  Error - {this.state.error}
                </h2>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 " />
              <div className="col-sm-12 col-md-4 col-lg-4 " />
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 " />
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="abc">
                  <DigitalClock />
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 " />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="BackGround">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <h2 className="neutro">Loading.....</h2>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 " />
              <div className="col-sm-12 col-md-4 col-lg-4 " />
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 " />
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="abc">
                  <DigitalClock />
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 " />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Weather;
