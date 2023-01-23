import firebase from "firebase/app";
require ("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDt8m6IQ1P88Xb9bkGXb4_kSfR_fuJrMz8",
  authDomain: "biblioteca2-4489e.firebaseapp.com",
  projectId: "biblioteca2-4489e",
  storageBucket: "biblioteca2-4489e.appspot.com",
  messagingSenderId: "252100851250",
  appId: "1:252100851250:web:9aede2a667e5e313c42e2b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



