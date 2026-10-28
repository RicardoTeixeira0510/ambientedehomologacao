// firebase-config.js — inicialização do Firebase (Auth + Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// >>> COLE AQUI A CONFIGURAÇÃO DO SEU PROJETO <<<
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// Documento único onde os saldos ficam salvos
const SALDOS_REF = doc(db, "config", "saldos");

window.BimerFirebase = {
  auth, db, SALDOS_REF,
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
  getDoc, setDoc,
};