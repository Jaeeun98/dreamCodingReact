import {firebaseDatabase} from './firebase';

class Database {

    readData(userId, onUpdate){
        const database = firebaseDatabase.ref(userId);
        database.on('value', snapshot => {
            const data = snapshot.val();
            data && onUpdate(data);
        })
        return () => database.off();
        
    }

    saveData(userId, card){
        firebaseDatabase.ref(`${userId}/${card.id}`).set(card);
    }

    deleteData(userId, cardId){
        firebaseDatabase.ref(`${userId}/${cardId}`).remove();
    }
}

export default Database;