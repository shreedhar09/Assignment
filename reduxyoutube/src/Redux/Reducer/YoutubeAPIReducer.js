export const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEO_REQUEST_SUCCESS":
      return action.payload; //Removed []

    default:
      return state;
  }
};

//Reducer To State Of Current Video
export const playReducer = (state = null, action) => {
  switch (action.type) {
    case "play_That_Video":
      return action.payload; //changed.

    default:
      return state;
  }
};
