import React from "react";
import ParticularVideo from "./ParticularVideo";

function Playlist(props) {
  let { VideoList, playVideoMethodToPlaylistComponent } = props;
  //console.log(props);

  return (
    <React.Fragment>
      {VideoList.map(whatEverData =>
        <ParticularVideo
          Ukey={whatEverData.id.videoId}
          PassedDataToThisComponent={whatEverData}
          playVideoMethodToParticularVideoComponent={
            playVideoMethodToPlaylistComponent
          }
        />
      )}
    </React.Fragment>
  );
}

export default Playlist;
