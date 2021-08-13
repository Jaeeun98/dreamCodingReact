import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './firebase';  
//초기화를 거쳐야

class Auth {

    authLogin(text){
        const provider = new firebase.auth[`${text}AuthProvider`]();
        return firebase.auth().signInWithPopup(provider);   
    }

    authLogout(){
        firebase.auth().signOut();
    }
}

export default Auth;