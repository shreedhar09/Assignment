import React from "react";
import { connect } from "react-redux";
const Songdetails = props => {
  console.log(props);

  if (!props.details) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        <h1>SONG Details:</h1>
        <h1>
          {props.details.name}
        </h1>
        <p>
          {props.details.duration}
        </p>
      </div>
    </div>
  );
};
const mapStateToprops = state => {
  console.log(state);
  return { details: state.details };
};

export default connect(mapStateToprops)(Songdetails);
