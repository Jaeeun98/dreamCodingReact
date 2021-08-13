import {firebaseStorage} from './firebase';

class StorageImg {

    async imgAdd(files){
        const storageRef = firebaseStorage.ref();
        const upload = storageRef.child(files.name).put(files);

        const meta = await upload.snapshot.ref.getMetadata().then(data => data);
        const url = await upload.snapshot.ref.getDownloadURL().then(data => data);

        return [meta, url];
    }

    imgDelete(imgUrl){
        const storageRef = firebaseStorage.ref();
        storageRef.child(imgUrl).delete();
        
    }
}

export default StorageImg;