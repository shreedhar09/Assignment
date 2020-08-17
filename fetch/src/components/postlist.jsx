import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchpostlist } from "../redux/actions/action";
import Postuser from "./postuser";
class Postlist extends Component {
  componentDidMount() {
    this.props.fetchpostlist();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.list.map(item =>
            <div className="col-md-8" key={item.id}>
              <h2>
                TITLE : {item.title}
              </h2>
              <p>
                BODY:{item.body}
              </p>
              <Postuser id={item.id} />
              <hr />
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { list: state.postlist };
};
export default connect(mapStateToProps, { fetchpostlist })(Postlist);
