import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4Uh9UQwV6JcusHfz86DeHAiQfq_Q9RY",
  authDomain: "chatappwp-34437.firebaseapp.com",
  databaseURL: "https://chatappwp-34437-default-rtdb.firebaseio.com",
  projectId: "chatappwp-34437",
  storageBucket: "chatappwp-34437.appspot.com",
  messagingSenderId: "875088156060",
  appId: "1:875088156060:web:b48a1a24ae65905de6e459",
  measurementId: "G-82KRKR76M6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
