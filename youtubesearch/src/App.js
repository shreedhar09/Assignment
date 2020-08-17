import React, { Component } from "react";
import axios from "axios";
import Logo from "./Uploads/Logo.png";
import Player from "./Components/Player";
import Playlist from "./Components/PlaylistComponent/Playlist";
import SearchBox from "./Components/SearchBox";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
      youtubeVideoList: [],
      playOnClickEvent: ""
    };
  }
  search = e => {
    this.setState({ searchField: e.target.value });
    //console.log(e.target.value)
  };
  btnOnClick = async e => {
    e.preventDefault();
    //console.log("Working..")
    let getDataFromThisURL = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIkiYdjMY1MSQTZqNJKpdqNXuiKDZz-L8`,
      {
        params: {
          part: "snippet",
          maxResults: 10,
          q: this.state.searchField,
          pageToken: "AIzaSyCIkiYdjMY1MSQTZqNJKpdqNXuiKDZz-L8"
        }
      }
    );
    //console.log(getDataFromThisURL)
    this.setState({ youtubeVideoList: getDataFromThisURL.data.items });
  };

  playVideo = data => {
    this.setState({ playOnClickEvent: data });
    //console.log("DataOfParticularVideoOnClick", data)
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <div className="logoMan">
              <img src={Logo} className="img" alt="YouTube" />
              <span className="name">YouTube</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <SearchBox
              placeholder="Search"
              value={this.state.searchField}
              YoutubeInput={this.search}
              onClickEvent={this.btnOnClick}
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 " />
        </div>

        <div className="row other ">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
            <Player videoOnOnClick={this.state.playOnClickEvent} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 vplaylist">
            <div className="row ">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3" />
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <Playlist
                  VideoList={this.state.youtubeVideoList}
                  playVideoMethodToPlaylistComponent={this.playVideo}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
