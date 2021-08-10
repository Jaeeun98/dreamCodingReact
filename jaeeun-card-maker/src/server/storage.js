import firebase from 'firebase/app';
import 'firebase/storage';
import firebaseApp from './firebase';

class StorageImg {

    imgAdd(imgUrl){
        const storageRef = firebase.storage().ref();
        storageRef
            .child(imgUrl.name)
            .put(imgUrl).then(snapshot => {
                return snapshot;
            })
        


        

    }
    
    

}

export default StorageImg;