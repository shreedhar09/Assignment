import React, { Component } from "react";
import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ButtonComponent";

//Card OutLine. Layout is defined Here
class MainCard extends Component {
  constructor(props) {
    super(props);

    this.BtnOnclickViewMore = this.BtnOnclickViewMore.bind(this);
    this.BtnOnclickCancel = this.BtnOnclickCancel.bind(this);
  }
  BtnOnclickViewMore(BtnViewMore) {
    alert(`Module ${BtnViewMore} is not ready yet!!!`);
  }
  BtnOnclickCancel(BtnCancel) {
    alert(`Module ${BtnCancel} is not ready yet!!!`);
  }

  render() {
    return (
      <form class="loginContainer">
        <h3 id="Heading">Employee Information</h3>
        <ImageComponent />
        <p className="tags">
          Name : {this.props.name}
        </p>
        <p className="tags">
          Role : {this.props.Role}
        </p>
        <ButtonComponent
          OnClickFunctionChildViewMore={this.BtnOnclickViewMore}
          OnClickFunctionChildCancel={this.BtnOnclickCancel}
        />
      </form>
    );
  }
}

export default MainCard;
