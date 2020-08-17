import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { RemoveFirebaseData } from "../Redux/Action/ProductAction";

function ProductOPR(props) {
  console.log(props);

  return (
    <React.Fragment>
      {_.map(props.firebaseData, (value, key) =>
        <div className="card text-center cardwidth" key={key}>
          <div className="card-body">
            <h5 className="card-title">
              {value.ProductName}
            </h5>
            <p className="card-text">
              {value.productPrice}
            </p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.RemoveFirebaseData(key)}
            >
              Remove
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: "10px" }}
            >
              <Link to={`/updateproduct/${key}`} style={{ color: "white" }}>
                Update
              </Link>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default connect(null, { RemoveFirebaseData })(ProductOPR);
