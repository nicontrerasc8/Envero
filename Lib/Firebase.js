import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
     apiKey: "AIzaSyCvlP8RvIajFAntx0RVrUJz0OIJ9Q-sxec",
     authDomain: "racing-online-store.firebaseapp.com",
     projectId: "racing-online-store",
     storageBucket: "racing-online-store.appspot.com",
     messagingSenderId: "754795557072",
     appId: "1:754795557072:web:6babbe142ae705a1e62ed5"
}

if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
}

export const storage = firebase.storage();
export const firestore = firebase.firestore();
