// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDrwcx9JrJMKJ7nk5iBc30i-9zeaSI2wk0',
  authDomain: 'brand-shop-c499b.firebaseapp.com',
  projectId: 'brand-shop-c499b',
  storageBucket: 'brand-shop-c499b.appspot.com',
  messagingSenderId: '150339008009',
  appId: '1:150339008009:web:18cc70a5b4766ed001ead8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
