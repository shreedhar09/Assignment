import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchFirebaseData } from "../Redux/Action/ProductAction";
import _ from "lodash";

class HomeProduct extends Component {
  componentDidMount() {
    this.props.FetchFirebaseData();
  }
  render() {
    if (!this.props.FireBaseData) {
      return null;
    }
    return (
      <div className="container-fluid">
        <div className="row producthome">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            {_.map(this.props.FireBaseData, (value, key) =>
              <div className="card text-center cardwidth" key={key}>
                <div className="card-body">
                  <h5 className="card-title">
                    {value.ProductName}
                  </h5>
                  <p className="card-text">
                    {value.productPrice}
                  </p>
                  <button className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            )}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.FetchedFireBaseData);
  return {
    FireBaseData: state.FetchedFireBaseData
  };
};
export default connect(mapStateToProps, { FetchFirebaseData })(HomeProduct);
