import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB39Qugns5JbqZPUktQP3mBdc5U-aw-GXA",
  authDomain: "pguide-ae882.firebaseapp.com",
  projectId: "pguide-ae882",
  storageBucket: "pguide-ae882.appspot.com",
  messagingSenderId: "251430212932",
  appId: "1:251430212932:web:ce87b7e120a811257a7311",
  measurementId: "G-SPJFBQ8BK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
///////////////////////////////
const addStaff = async (email, name, department) => {
  console.log(db);
  console.log("hi");
  try {
    await addDoc(collection(db, "staff"), {
      name: name,
      email: email,
      department: department,
      created: Timestamp.now(),
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const deleteStaff = async (id) => {
  const staffDocRef = doc(db, "staff", id);
  try {
    await deleteDoc(staffDocRef);
  } catch (err) {
    alert(err);
  }
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  sendPasswordReset,
  logout,
  addStaff,
  deleteStaff,
};
