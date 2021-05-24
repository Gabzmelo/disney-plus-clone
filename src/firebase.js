import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC5drSUH8dXZJx7VnGiEnuJ6ugat2BjoSI",
  authDomain: "disney-clone-c2a9e.firebaseapp.com",
  projectId: "disney-clone-c2a9e",
  storageBucket: "disney-clone-c2a9e.appspot.com",
  messagingSenderId: "118423074570",
  appId: "1:118423074570:web:f365affeecc80473662cf3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
