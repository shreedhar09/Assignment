import axios from "axios";

export const Fetch_Videos_API = aim => {
  return async function(dispatch) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBoDOoA-VMyTS7cnjzuyZgn-kzUl8yLckk`,
      {
        params: {
          part: "snippet",
          maxResults: 5,
          q: aim, //Dynamic Request.
          pageToken: "AIzaSyBoDOoA-VMyTS7cnjzuyZgn-kzUl8yLckk"
        }
      }
    );
    dispatch({ type: "FETCH_VIDEO_REQUEST_SUCCESS", payload: response.data });
  };
};

//Action To Store State of Clicked Video Using "onClick".
export const playVideo = state => {
  return async function(dispatch) {
    dispatch({ type: "play_That_Video", payload: state }); //changed
  };
};
