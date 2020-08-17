import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBNNgMQgjGKGl1SVhvG7zJ6vC67Ul_P7Qs",
  authDomain: "reacttest-265b3.firebaseapp.com",
  databaseURL: "https://reacttest-265b3.firebaseio.com",
  projectId: "reacttest-265b3",
  storageBucket: "reacttest-265b3.appspot.com",
  messagingSenderId: "798880837620",
  appId: "1:798880837620:web:4131d7a96ec601b5d693a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("/product");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
