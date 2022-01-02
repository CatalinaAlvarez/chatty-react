import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    "apiKey": "AIzaSyBgfZCDlly2CLt3cmuDxdGhsKiYvXd3CM8",
    "authDomain": "chatty-8debe.firebaseapp.com",
    "projectId": "chatty-8debe",
    "storageBucket": "chatty-8debe.appspot.com",
    "messagingSenderId": "597122382608",
    "appId": "1:597122382608:web:1014ccbca26a7ea8e3c395",
    "measurementId": "G-GCQYRY88PQ"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
