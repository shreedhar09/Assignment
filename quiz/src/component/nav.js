import React, { Component } from "react";
import "../App.css";

import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="container kai"
          style={{ textAlign: "center", marginTop: "200px" }}
        >
          <Link to="/Qus" className="btn btn-dark atag mx-auto">
            Start the Survey
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
