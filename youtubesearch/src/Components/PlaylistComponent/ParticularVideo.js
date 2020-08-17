import React from "react";

function ParticularVideo(props) {
  let {
    PassedDataToThisComponent,
    Ukey,
    playVideoMethodToParticularVideoComponent
  } = props;
  //console.log(PassedDataToThisComponent);

  return (
    //pass the key from [playlist.js] component
    <div
      className="card text-left"
      key={Ukey}
      onClick={() =>
        playVideoMethodToParticularVideoComponent(PassedDataToThisComponent)}
      /* here [playVideoMethodToParticularVideoComponent(PassedDataToThisComponent)] in that
         ["playVideoMethodToParticularVideoComponent"] is ["playVideo"] Method in App.js and
         ["PassedDataToThisComponent"] is ["data"] Parameter of playVideo Method
         */
    >
      <img
        className="card-img-top"
        src={PassedDataToThisComponent.snippet.thumbnails.high.url}
      />
      <div className="card-body a">
        <h6 className="card-title">
          {PassedDataToThisComponent.snippet.title}
        </h6>
        <p className="card-text">
          {PassedDataToThisComponent.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
}

export default ParticularVideo;
