import firebase from 'firebase/app';
import 'firebase/database';
import firebaseApp from './firebase';

class Database {

    readData(userId, onUpdate){
        const database = firebase.database().ref(userId);
        database.on('value', snapshot => {
            const data = snapshot.val();
            
            data && onUpdate(data);
        })
        
    }

    saveData(userId, card){
        firebase.database().ref(`${userId}/${card.id}`).set(card);
    }
}

export default Database;