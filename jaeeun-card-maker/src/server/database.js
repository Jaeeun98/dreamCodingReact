import firebase from 'firebase/app';
import firebaseApp from './firebase';

class Database {
    saveData(id, name, company, color, job, mail, mes){
        const database = firebase.database();
    }
}

export default Database;