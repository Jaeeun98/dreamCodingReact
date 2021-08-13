import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket : process.env.REACT_APP_STORAGEBUCKET,
}

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseStorage = firebase.storage();
export const firebaseDatabase = firebase.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
