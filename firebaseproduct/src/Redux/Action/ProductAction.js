import { auth, googleProvider, database } from "../../Firebase/Firebase";
import { history } from "../../History/History";

//Authentication Action.
export const googleAuth = () => {
  return async () => {
    await auth.signInWithPopup(googleProvider);
    history.push("/Product");
    window.location.reload();
  };
};

//To Save Google Authentication Data.
export const SaveGoogleAuthData = () => {
  return async dispatch => {
    await auth.onAuthStateChanged(response => {
      dispatch({ type: "FetchAuthData", payload: response });
    });
  };
};

//For Sign Out.
export const signOut = () => {
  return async () => {
    await auth.signOut();
    history.push("/login");
    window.location.reload();
  };
};

// Add Data To Firebase.
export const addDataToDataBase = DataFromInput => {
  return async () => {
    await database.push(DataFromInput);
  };
};

//Fetch FireBase Data

export const FetchFirebaseData = () => {
  return async dispatch => {
    await database.on("value", data => {
      let FireBaseData = data.val();
      dispatch({ type: "Fetch_Data", payload: FireBaseData });
    });
  };
};

//Update Firebase Data.
export const UpdateDataFirebase = (id, data) => {
  return async () => {
    await database.child(id).update(data);
    history.push("/Product");
    window.location.reload();
  };
};

//Remove Firebase Data

export const RemoveFirebaseData = id => {
  return async () => {
    await database.child(id).remove();
  };
};
