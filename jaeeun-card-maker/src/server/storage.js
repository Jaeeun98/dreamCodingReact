import firebase from 'firebase/app';
import 'firebase/storage';
import firebaseApp from './firebase';

class StorageImg {

    async imgAdd(imgUrl){
        const storageRef = firebase.storage().ref();
        const upload = storageRef.child(imgUrl.name).put(imgUrl);

        const meta = await upload.snapshot.ref.getMetadata().then(data => data);
        const url = await upload.snapshot.ref.getDownloadURL().then(data => data);

        return [meta, url];
        


            
        
        

        
    }
    
    

}

export default StorageImg;