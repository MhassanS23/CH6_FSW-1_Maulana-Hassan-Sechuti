import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from 'firebase/firestore';
  
const firebaseConfig = {
    apiKey: 'AIzaSyA2JVBWjrGV-vWFgR7GJknEbTvSeO5V9Xo',
    authDomain: 'autentication-b5e9a.firebaseapp.com',
    projectId: 'autentication-b5e9a',
    storageBucket: 'autentication-b5e9a.appspot.com',
    messagingSenderId: '604542871023',
    appId: '1:604542871023:web:420f97ac62904265fa421a',
    measurementId: 'G-Y7EZKP230K'
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
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
            });
        }
        localStorage.setItem('isLoggedin', true);
        localStorage.setItem('token', JSON.stringify(user.accessToken));
        localStorage.setItem('profile', JSON.stringify(user.displayName));
        console.log(user);
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