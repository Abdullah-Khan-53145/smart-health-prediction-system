// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKclRos3tM2drNVO5ufG8Hko5tyCajhhg",
  authDomain: "smart-health-prediction-7dbeb.firebaseapp.com",
  projectId: "smart-health-prediction-7dbeb",
  storageBucket: "smart-health-prediction-7dbeb.appspot.com",
  messagingSenderId: "456893066757",
  appId: "1:456893066757:web:bc172c4cd413c0efd3b66c",
  measurementId: "G-PFJY81LBEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, provider, storage, db };
