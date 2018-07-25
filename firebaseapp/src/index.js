import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCf2OL8Hcm85CMRcZSoQh8OXWvOHz9HCLc",
    authDomain: "react-firebase-69677.firebaseapp.com",
    databaseURL: "https://react-firebase-69677.firebaseio.com",
    projectId: "react-firebase-69677",
    storageBucket: "react-firebase-69677.appspot.com",
    messagingSenderId: "1062568805827"
}

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
