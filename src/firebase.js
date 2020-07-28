import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFx1VMfDIYWppiioVoIOYSQBZxmHtS9qI",
  authDomain: "tinderclone-8e7c9.firebaseapp.com",
  databaseURL: "https://tinderclone-8e7c9.firebaseio.com",
  projectId: "tinderclone-8e7c9",
  storageBucket: "tinderclone-8e7c9.appspot.com",
  messagingSenderId: "961326063792",
  appId: "1:961326063792:web:0febd4a011cd0a652c1b75",
  measurementId: "G-8SDEX0HGD7",
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database =firebaseApp.firestore();


export default database

