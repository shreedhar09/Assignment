import React, { Component } from "react";

export class AdminPanel extends Component {
  render() {
    return (
      <div className="BackGround">
        <div className="container">
          <div className="row cardalign">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
              <div class="card text-white bg-danger mb-3 cardBody">
                <div class="card-header">Product</div>
                <div class="card-body">
                  <h5 class="card-title">Remove Product</h5>
                  <p class="card-text">
                    If You Want To Remove the product Please Click Here.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
              <div class="card text-white bg-warning mb-3 cardBody">
                <div class="card-header">Product</div>
                <div class="card-body">
                  <h5 class="card-title">Update Product</h5>
                  <p class="card-text">
                    If You Want To Update the Product Please Click Here.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 CardBox">
              <div class="card text-white bg-info mb-3 cardBody">
                <div class="card-header">Product</div>
                <div class="card-body">
                  <h5 class="card-title">Add Product</h5>
                  <p class="card-text">
                    If You Want To Add the Product Please Click Here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
