import React, { Component } from "react";
import Logo from "./Uploads/Logo.png";
import "./App.css";

import Player from "./Components/Player";
import YouTubeSearchBox from "./Components/YouTubeSearchBox";
import Playlist from "./Components/Playlist";

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <div className="logoMan">
              <img src={Logo} className="img" alt="YouTube" />
              <span className="name">YouTube</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <YouTubeSearchBox />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 " />
        </div>

        <div className="row other ">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
            <Player />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 vplaylist">
            <div className="row ">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3" />
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <Playlist />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
