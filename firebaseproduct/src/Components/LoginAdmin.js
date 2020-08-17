import React, { Component } from "react";
import { googleAuth } from "../Redux/Action/ProductAction";
import { connect } from "react-redux";

export class LoginAdmin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-3 col-md-4 col-sm-6 google">
          <div className="card">
            <h5 className="card-header">Login With Google</h5>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props.googleAuth}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { googleAuth })(LoginAdmin);
