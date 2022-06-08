import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBEPyjFJYrY_Bf10MH0cCwrZEfVlWm9F4w",
    authDomain: "nall-f3714.firebaseapp.com",
    projectId: "nall-f3714",
    storageBucket: "nall-f3714.appspot.com",
    messagingSenderId: "462954662405",
    appId: "1:462954662405:web:81f9f6e5d5ed75042c2a6c",
    measurementId: "G-7QK0X9WNET"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);