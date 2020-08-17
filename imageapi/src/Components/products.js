import React from "react";

const Product = props => {
  if (props.productProp.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <div className="row">
        {props.productProp.hits.map((data, index) =>
          <div className="col-md-4 pro" key={index}>
            <img
              className="card-img-top img-responsive image"
              src={data.largeImageURL}
              alt={data.tags}
            />
            Photo clicked By: {data.user}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
