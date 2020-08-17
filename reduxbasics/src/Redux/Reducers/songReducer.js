import { combineReducers } from "redux";
const SongList = () => {
  return [
    {
      id: 1,
      name: "Senorita",
      duration: "4:30"
    },
    {
      id: 2,
      name: "Girls Like You",
      duration: "3:30"
    },
    {
      id: 3,
      name: "Gangnam Style",
      duration: "4:30"
    },
    {
      id: 4,
      name: "Shape of you",
      duration: "4:30"
    }
  ];
};

const ListDetails = (song = null, action) => {
  console.log(song, action);

  switch (action.type) {
    case "SELECTED_SONG":
      console.log(action.payload);
      return action.payload;
    default:
      return song;
  }
};

const reducers = combineReducers({ songlist: SongList, details: ListDetails });
export default reducers;
