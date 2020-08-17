import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { SaveGoogleAuthData, signOut } from "../Redux/Action/ProductAction";
class Navigation extends Component {
  componentDidMount() {
    this.props.SaveGoogleAuthData();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          Product
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {this.props.GoogleAuthData
              ? <React.Fragment>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/logout"
                      onClick={() => {
                        this.props.signOut();
                      }}
                    >
                      Logout
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/Product">
                      Admin Panel
                    </Link>
                  </li>
                </React.Fragment>
              : <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  //console.log(state)
  return {
    GoogleAuthData: state.FetchedAuthData
  };
};
export default connect(mapStateToProps, { SaveGoogleAuthData, signOut })(
  Navigation
);
