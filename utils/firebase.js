import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBKnmuIRVBS-Am3tNd7leirQZ6pP7Jv8h8",
//   authDomain: "delsu-learn.firebaseapp.com",
//   projectId: "delsu-learn",
//   storageBucket: "delsu-learn.appspot.com",
//   messagingSenderId: "764092388775",
//   appId: "1:764092388775:web:0a9eca8b73dc0bc8931282",
//   measurementId: "G-0FPRDHF15M",
// };
const firebaseConfig = {
  apiKey: "AIzaSyC2SrQq89VUH-R0N72cgkqTnJyJGVH_EEA",
  authDomain: "apcaims.firebaseapp.com",
  projectId: "apcaims",
  storageBucket: "apcaims.appspot.com",
  messagingSenderId: "82720903991",
  appId: "1:82720903991:web:b1f506c394e679f78a80b2",
  measurementId: "G-8L95984SGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
