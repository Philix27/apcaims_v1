import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKnmuIRVBS-Am3tNd7leirQZ6pP7Jv8h8",
  authDomain: "delsu-learn.firebaseapp.com",
  projectId: "delsu-learn",
  storageBucket: "delsu-learn.appspot.com",
  messagingSenderId: "764092388775",
  appId: "1:764092388775:web:0a9eca8b73dc0bc8931282",
  measurementId: "G-0FPRDHF15M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
