import React, { Component } from "react";
import axios from "axios";
import Products from "./products";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      products: [],
      color: ""
    };
  }
  searchItem = e => {
    this.setState({ item: e.target.value });
    console.log(e.target);
  };
  searchColor = e => {
    this.setState({ color: e.target.value });
    console.log(e.target);
  };
  getImgs = async e => {
    e.preventDefault();
    // this.setState({ products: this.state.item }); //error Cannot read property 'map' of undefined
    let daa = await axios.get(
      `https://pixabay.com/api/?key=14542584-cfc2860bdd7dc23fa94fdb78e&q=${this
        .state.color}+${this.state.item}&image_type=photo`
    );
    this.setState({ products: daa.data });
  };

  render() {
    return (
      <div className="BGH">
        <div className="BG">
          <div className="container-fluid">
            <div className="row heading">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 box">
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                      aria-describedby="basic-addon2"
                      value={this.state.item}
                      onChange={this.searchItem}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="color..."
                      aria-describedby="basic-addon2"
                      value={this.state.color}
                      onChange={this.searchColor}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-info"
                        type="button"
                        onClick={this.getImgs}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
            </div>
            <div className="row pro">
              <Products productProp={this.state.products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
