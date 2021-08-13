import {firebaseAuth, githubProvider, googleProvider} from './firebase';

class Auth {

    authLogin(text){
        const provider = this.getProvider(text)
        return firebaseAuth.signInWithPopup(provider);   
    }

    authLogout(){
        firebaseAuth.signOut();
    }

    getProvider(name) {
        switch (name) {
          case 'Google': return googleProvider;
          case 'Github': return githubProvider;
    
          default: throw new Error('not supported provider')
        }
      }
}

export default Auth;