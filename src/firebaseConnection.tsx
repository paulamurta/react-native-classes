// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAb1-_Y5EwqG_yASlgXfksJmUHZ2-GJR2U',
  authDomain: 'meuapp-c3773.firebaseapp.com',
  projectId: 'meuapp-c3773',
  storageBucket: 'meuapp-c3773.appspot.com',
  messagingSenderId: '497418844119',
  appId: '1:497418844119:web:2366bb12046b84b81d7d92',
  measurementId: 'G-HHY79N1MP7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
