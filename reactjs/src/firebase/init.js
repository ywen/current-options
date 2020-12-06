import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDrCiE6lS3W0FnhegGwpiR-Ger_eqcG_KA",
  authDomain: "my-options-6eb19.firebaseapp.com",
  databaseURL: "https://my-options-6eb19.firebaseio.com",
  projectId: "my-options-6eb19",
  storageBucket: "my-options-6eb19.appspot.com",
  messagingSenderId: "980323281230",
  appId: "1:980323281230:web:6ee11012ba23952f47961f"
};

const init = () => {
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

export default init;
