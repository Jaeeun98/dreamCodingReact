import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket : process.env.REACT_APP_STORAGEBUCKET,
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp
