import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwwuDWaQ90d5uqGcq6xOHWKZyZKG-AEL4",
  authDomain: "hr-architecture-lv.firebaseapp.com",
  projectId: "hr-architecture-lv",
  storageBucket: "hr-architecture-lv.appspot.com",
  messagingSenderId: "218663713199",
  appId: "1:218663713199:web:65c1955093667a67fa575a",
  measurementId: "G-0D1QD4Y4T4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
