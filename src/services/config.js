
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxchjoAtvydqdANG3g_Jom0ScaykYa998",
  authDomain: "okokistore.firebaseapp.com",
  projectId: "okokistore",
  storageBucket: "okokistore.appspot.com",
  messagingSenderId: "508399998350",
  appId: "1:508399998350:web:86cd22fc6842fe248400df"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);    