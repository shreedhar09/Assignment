import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";
export class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.FetchUserData(this.props.id)
    this.props.FetchUserData(this.props.id);
  }
  /* showAuthor = () => {
    document.getElementById("tp").innerHTML = this.props.UserData.name
    console.log(this.props.UserData.name)
  } */

  render() {
    if (!this.props.UserData) {
      return null;
    }
    /* return  (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <button
            type="button"
            className="btn btn-info"
            onClick={this.showAuthor}
          >
            See Author
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3 id="tp" />
        </div>
      </div>
    ) */

    return (
      <React.Fragment>
        <h3>
          {this.props.UserData.name}
        </h3>
      </React.Fragment>
    );
  }
}
const SendStateToProps = (state, ownProps) => {
  //console.log(state, ownProps)

  console.log(state.PostFetchList.PostList);
  console.log(state.UserFetchList.UsersList);

  return {
    UserData: state.UserFetchList.UsersList.find(
      item => item.id === ownProps.id
    )
  };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
