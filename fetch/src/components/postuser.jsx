import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchuserslist } from "../redux/actions/action";
class Postuser extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.fetchuserslist();
  }
  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <h1>
            {this.props.user.name}
          </h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownprops) => {
  console.log(state.postuser, ownprops);

  return { user: state.postuser.find(item => item.id === ownprops.id) };
};

export default connect(mapStateToProps, { fetchuserslist })(Postuser);
