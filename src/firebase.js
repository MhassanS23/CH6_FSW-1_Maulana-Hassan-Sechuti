import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAF8cTCuN0ukmhLcs60Z27fjN6MgRsAQXQ",
    authDomain: "lithe-center-386805.firebaseapp.com",
    projectId: "lithe-center-386805",
    storageBucket: "lithe-center-386805.appspot.com",
    messagingSenderId: "551854693460",
    appId: "1:551854693460:web:9b8f699ab1a7da92d5e1c1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      localStorage.setItem('isLoggedin', true)
      localStorage.setItem('token', JSON.stringify(user.accessToken));
      localStorage.setItem('profile', JSON.stringify(user.displayName));
      console.log(user)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logout,
  };