import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl2vJcW8mKSmR6bS8B66SIwfESABAaTQE",
  authDomain: "allevent-2ecdd.firebaseapp.com",
  projectId: "allevent-2ecdd",
  storageBucket: "allevent-2ecdd.appspot.com",
  messagingSenderId: "273721913230",
  appId: "1:273721913230:web:07e02f523bf2897c923edf",
  measurementId: "G-Z39VP1VQZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };