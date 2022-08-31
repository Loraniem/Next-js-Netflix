// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKM4XiHkkM7yK_wjH59yNZCzjCvhL7RTs",
  authDomain: "netflix-clone-cadf8.firebaseapp.com",
  projectId: "netflix-clone-cadf8",
  storageBucket: "netflix-clone-cadf8.appspot.com",
  messagingSenderId: "1018437528070",
  appId: "1:1018437528070:web:90c34289f598a4e6d97187"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }