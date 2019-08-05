import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAIj4BEILWje1z3GCPanyG2OU7jO08klRs',
  authDomain: 'crown-database.firebaseapp.com',
  databaseURL: 'https://crown-database.firebaseio.com',
  projectId: 'crown-database',
  storageBucket: '',
  messagingSenderId: '980465420752',
  appId: '1:980465420752:web:cbecdb7b41a42ff9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
