import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBloxSyr_z_232v6XcfivDotnRMByyglB8",
  authDomain: "simple-home-79519.firebaseapp.com",
  projectId: "simple-home-79519",
  storageBucket: "simple-home-79519.appspot.com",
  messagingSenderId: "1080645360240",
  appId: "1:1080645360240:web:e91a939bdcbc9bdcabb2b5",
  measurementId: "G-N343JKDFWB"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)