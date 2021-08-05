import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './firebase';

class Auth {

    authLogin(text){
        const provider = new firebase.auth[`${text}AuthProvider`]();
        firebase.auth().signInWithPopup(provider)
    }
}

export default Auth;