import React from "react";

function InfoComponent(props) {
  let { name, Role } = props;
  return (
    <div>
      <p className="tags">
        Name : {name}
      </p>
      <p className="tags">
        Role : {Role}
      </p>
    </div>
  );
}
export default InfoComponent;
