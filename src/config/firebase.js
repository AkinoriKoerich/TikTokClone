
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyBXQ54uqDs2HDGR2h0hFQKkzyw5cycIl7k",
  authDomain: "tiktok---jornada-2730f.firebaseapp.com",
  projectId: "tiktok---jornada-2730f",
  storageBucket: "tiktok---jornada-2730f.appspot.com",
  messagingSenderId: "517146522271",
  appId: "1:517146522271:web:21a2dcc38e9b438356e8aa"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;