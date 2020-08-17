import React, { Component } from "react";
import { connect } from "react-redux";
import { UpdateDataFirebase } from "../Redux/Action/ProductAction";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductName: this.props.updateDataItem.ProductName,
      productPrice: this.props.updateDataItem.productPrice
    };
  }

  getInputName = e => {
    this.setState({ ProductName: e.target.value });
  };

  getInputPrice = e => {
    this.setState({ productPrice: e.target.value });
  };

  sendDataToFireBase = e => {
    e.preventDefault();
    let data = {
      ProductName: this.state.ProductName,
      productPrice: this.state.productPrice
    };
    this.props.UpdateDataFirebase(this.props.match.params.id, data);
  };
  render() {
    if (!this.props.updateDataItem) {
      return null;
    }
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
                name="proname"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.ProductName}
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
              Update
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);

  return {
    updateDataItem: state.FetchedFireBaseData[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, { UpdateDataFirebase })(UpdateProduct);
