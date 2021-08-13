import firebase from 'firebase/app';
import 'firebase/database';
import firebaseApp from './firebase';

class Database {
    saveData(userId, card){
        firebase.database().ref(`${userId}/${card.id}`).set(card);
        
    }
}

export default Database;