import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const authProvider = getAuth(app)

export const loginGithub = () => {
    const githubProvider = new GithubAuthProvider()
    signInWithPopup(authProvider, githubProvider)
}

export { db, auth, storage, authProvider }