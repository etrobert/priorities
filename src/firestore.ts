// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBnqlO-IPe7gg1DBkkCZkEAWG82TNfyHXQ',
  authDomain: 'priorities-6b4cb.firebaseapp.com',
  projectId: 'priorities-6b4cb',
  storageBucket: 'priorities-6b4cb.appspot.com',
  messagingSenderId: '1070625994744',
  appId: '1:1070625994744:web:f0dd12a369dbcccfe4080d',
  measurementId: 'G-QX4VTX3H67',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore;
