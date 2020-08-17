import React, { Component } from "react";
import { connect } from "react-redux";

export class Player extends Component {
  render() {
    if (!this.props.particularVideo) {
      return null;
    } //For "Undefined".
    return (
      <React.Fragment>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="tubeplayer"
            src={`https://www.youtube.com/embed/${this.props.particularVideo.id
              .videoId}`} //changed.
            title="YouTubeFrame"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h5 className="title">
          {this.props.particularVideo.snippet.title}
        </h5>
        <hr className="line" />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.playVideo); //Update.
  return {
    particularVideo: state.playVideo
  };
};
export default connect(mapStateToProps)(Player);
