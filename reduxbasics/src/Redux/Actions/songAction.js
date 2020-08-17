export const SelectedSong = song => {
  console.log(song);

  return { type: "SELECTED_SONG", payload: song };
};
