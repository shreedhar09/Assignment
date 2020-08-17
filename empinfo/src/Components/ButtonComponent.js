import React from "react";

function ButtonComponent(props) {
  let { OnClickFunctionChildViewMore, OnClickFunctionChildCancel } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-block btnOpr"
        onClick={() => OnClickFunctionChildViewMore("View More")}
      >
        View More
      </button>
      <button
        type="button"
        className="btn btn-block btnOpr"
        onClick={() => OnClickFunctionChildCancel("Cancel")}
      >
        Cancel
      </button>
    </div>
  );
}
export default ButtonComponent;
