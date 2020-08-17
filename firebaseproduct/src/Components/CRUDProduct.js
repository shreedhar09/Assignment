import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addDataToDataBase,
  FetchFirebaseData
} from "../Redux/Action/ProductAction";
import ProductOPR from "./ProductOPR";

export class CRUDProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      productPrice: 0
    };
  }

  getInputName = e => {
    this.setState({ productName: e.target.value });
    console.log(e.target.value);
  };

  getInputPrice = e => {
    this.setState({ productPrice: e.target.value });
    console.log(e.target.value);
  };

  sendDataToFireBase = () => {
    let data = {
      ProductName: this.state.productName,
      productPrice: this.state.productPrice
    };
    this.props.addDataToDataBase(data);
    this.setState({ productName: "", productPrice: 0 });
  };

  componentDidMount() {
    this.props.FetchFirebaseData();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row crudProduct">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Product Name
                </span>
              </div>
              <input
                type="text"
                name="proname" //Important For getInput.
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.productName}
                onChange={this.getInputName}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Product Price
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                name="proprice" //Important For getInput.
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.productPrice}
                onChange={this.getInputPrice}
              />
            </div>

            <button
              type="button"
              className="btn btn-info btn-default"
              onClick={this.sendDataToFireBase}
            >
              Add Data
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
        </div>
        <div className="container">
          <div className="fetch">
            <ProductOPR firebaseData={this.props.FirebaseData} />
          </div>
        </div>
      </div>
    );
  }
}

const mapstateToprops = state => {
  console.log(state);

  return { FirebaseData: state.FetchedFireBaseData };
};
export default connect(mapstateToprops, {
  addDataToDataBase,
  FetchFirebaseData
})(CRUDProduct);
