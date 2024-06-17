import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0O-1VqgSUNTy1sbBYxHMsNx7e9lE8_1s",
  authDomain: "gifted-card-swap.firebaseapp.com",
  projectId: "gifted-card-swap",
  storageBucket: "gifted-card-swap.appspot.com",
  messagingSenderId: "1905304063",
  appId: "1:1905304063:web:3378fedecec00eb8b5c7ca",
  measurementId: "G-1DD9QVCPYN"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const db = getFirestore()
export const auth = getAuth(app)
