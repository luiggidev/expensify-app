import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA_pIdiLMKr-M7-8h-lDcAJkuOenngbFEw",
    authDomain: "expensify-e0374.firebaseapp.com",
    databaseURL: "https://expensify-e0374-default-rtdb.firebaseio.com",
    projectId: "expensify-e0374",
    storageBucket: "expensify-e0374.appspot.com",
    messagingSenderId: "1019705217487",
    appId: "1:1019705217487:web:d122c94f067ca4c36982ba",
    measurementId: "G-V4B2FFNWT9"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
    name: 'Andrew Mead',
    age: 26,
    stressLevel: 6,
    job: {
      title: 'Software developer',
      company: 'Google'
    },
    location: {
        city: 'Philadelphia',
        country: 'US'
    }
  }).then(() =>{
    console.log('Data is saved!');
  }).catch((error) => {
    console.log('This failed: ', error);
  });

  database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
  });
