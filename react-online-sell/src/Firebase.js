import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDESl0T3nZUKSq-L44FLyIgkCEkUY-ZuU8",
  authDomain: "react-online-sell.firebaseapp.com",
  projectId: "react-online-sell",
  storageBucket: "react-online-sell.appspot.com",
  messagingSenderId: "996804407861",
  appId: "1:996804407861:web:c2197a97ad5cbe4b19377c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
