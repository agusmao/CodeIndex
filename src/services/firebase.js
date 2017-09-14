import firebase from 'firebase'

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
var firebaseApp = firebase.initializeApp(config);

export var database = firebase.database()

export default firebaseApp