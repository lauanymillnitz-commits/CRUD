import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "notas-dos-alunos-c5a39.firebaseapp.com",
  projectId: "notas-dos-alunos-c5a39",
  storageBucket: "notas-dos-alunos-c5a39.appspot.com",
  messagingSenderId: "697351965295",
  appId: "1:697351965295:web:edf244429313ee48125b9a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
