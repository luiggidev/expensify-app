import * as firebase from 'firebase';

const config = {
  // ! Configuration from your firebase account
    apiKey: "###",
    authDomain: "###",
    databaseURL: "###",
    projectId: "###",
    storageBucket: "###",
    messagingSenderId: "###",
    appId: "###",
    measurementId: "###"
  };

  firebase.initializeApp(config);

  const database = firebase.database();


  // ! Working with arrays in Firebase
  // ** The solution to arrays is .push() it adds objects with unique identifier
  // database.ref('notes').push({
  //   title: 'Course topics',
  //   body: 'React Native, Angular, Python'
  // })

  // removing item with specific id
  // database.ref('notes/-Mu_u_lQW5Hufz9xjOcp').remove()

  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses);
  // })

  //  * subscribes to listen to changes and formats in a array like fashion
  //  const onValueChange = database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

  // * Event for when a child is removed 
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // })

  // * Event for when a child changed 
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // })

  // * Event for when a child changed 
  //  database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // })

  // * CRUD - Create, Read, Update and delete
  // ! Create data
  // database.ref().set({
  //   name: 'Andrew Mead',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //       city: 'Philadelphia',
  //       country: 'US'
  //   }
  // }).then(() =>{
  //   console.log('Data is saved!');
  // }).catch((error) => {
  //   console.log('This failed: ', error);
  // });
  // ! Create data 2 - Push
  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createdAt: 784654
  // })

  // ! Read Data
  // *Once example
  // database.ref()
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  // });
  
  // * Subscription
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //     console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

  // setTimeout(() => {
  //   database.ref('age').set(29)
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(30)
  // }, 10500);

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const name = snapshot.val().name;
  //   const jobTitle = snapshot.val().job.title;
  //   const jobCompany = snapshot.val().job.company;
  //   console.log(`${name} is a ${jobTitle} at ${jobCompany}`);
  // }, (e) => {
  //   console.log(e);
  // });

  // ! Update data
  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

  // ! Remove data
  // database.ref() 
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   })