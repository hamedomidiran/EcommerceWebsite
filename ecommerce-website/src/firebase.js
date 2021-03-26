import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDx_9MsubKSXlnILjP_ky3Lb7hphO_Ffxo",
  authDomain: "ecommerce-website-e8f42.firebaseapp.com",
  projectId: "ecommerce-website-e8f42",
  storageBucket: "ecommerce-website-e8f42.appspot.com",
  messagingSenderId: "346147075979",
  appId: "1:346147075979:web:eccfd83b3da25f609be18e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db   = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };