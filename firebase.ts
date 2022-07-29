// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwP8K0iGyCywmRE-F_YGvKLCEn8Ml638",
  authDomain: "netflix-design.firebaseapp.com",
  projectId: "netflix-design",
  storageBucket: "netflix-design.appspot.com",
  messagingSenderId: "864111188901",
  appId: "1:864111188901:web:2ecbf7eb2b4448e8cfa64c",
  databaseURL: "https://netflix-design-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }