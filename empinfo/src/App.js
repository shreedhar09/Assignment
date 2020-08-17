import React from "react";

import MainCard from "./Components/Main";
import "./App.css";

function App() {
  return (
    <div className="BackGround">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
            <MainCard name="Darshan" Role="Systems analyst" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
            <MainCard name="Uday" Role="Technical support" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
            <MainCard name="Sai" Role="Network engineer" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
            <MainCard name="Harshal" Role="Technical consultant" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
            <MainCard name="Hitendra" Role="Web developer" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
            <MainCard name="Shyam" Role="Business analyst" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
