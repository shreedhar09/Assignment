import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectedSong } from "../Redux/Actions/songAction";
class Songlist extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.list.map(data =>
            <div className="col-md-12" key={data.id}>
              <h3>
                {data.name}
              </h3>
              <p>
                {data.duration}
              </p>
              <button
                type="button"
                className="btn btn-danger btn-md"
                onClick={() => console.log(this.props.SelectedSong(data))}
              >
                View Details
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToprops = state => {
  console.log(state);
  return { list: state.songlist };
};

export default connect(mapStateToprops, { SelectedSong })(Songlist);
