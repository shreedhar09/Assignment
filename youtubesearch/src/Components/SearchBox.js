import React from "react";
import searchIcon from "../Uploads/searchIcon.png";

function SearchBox(props) {
  let { placeholder, value, YoutubeInput, onClickEvent } = props;
  //console.log(props.YoutubeInput)
  return (
    <div className="input-group mb-3 searchBox">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={YoutubeInput}
      />
      <div className="input-group-append SearchDiv">
        <button
          className="btn btn-outline-secondary btnSearch"
          type="button"
          id="button-addon2"
          onClick={onClickEvent}
        >
          <img src={searchIcon} className="btnImg" alt="YouTube" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
