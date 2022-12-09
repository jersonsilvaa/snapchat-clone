import firebase from 'firebase'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
}

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const authProvider = new firebase.auth.GithubAuthProvider()

export { db, auth, storage, authProvider }