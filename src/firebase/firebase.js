import * as firebase from "firebase";
import * as expensesActions from "../actions/expenses";

const config = {
  apiKey: "AIzaSyBazfDeFQtTyLVYWijHSzyy46qWnd89-6k",
  authDomain: "expensify-83061.firebaseapp.com",
  databaseURL: "https://expensify-83061.firebaseio.com",
  projectId: "expensify-83061",
  storageBucket: "expensify-83061.appspot.com",
  messagingSenderId: "637141571334"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// const expenses = [
//   {
//     description: "Rent",
//     note: "",
//     amount: "1000",
//     createdAt: "1989-09-30"
//   },
//   {
//     description: "Oil",
//     note: "",
//     amount: "8790",
//     createdAt: "2018-11-20"
//   },
//   {
//     description: "Rent",
//     note: "",
//     amount: "3489",
//     createdAt: "2017-03-10"
//   }
// ];

// expenses.forEach(function(expense) {
//   database.ref("expenses").push(expense);
// });

// database.ref("expenses").on(
//   "value",
//   snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({ id: childSnapshot.key, ...childSnapshot });
//     });
//     console.log(expenses);
//   },
//   error => {
//     console.log(error);
//   }
// );

// const onValueChange = database
//   .ref()
//   .on("value", snapshot => console.log(snapshot.val()), e => console.log(e));

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3000);
// setTimeout(() => {
//   database.ref("age").set(30);
// }, 6000);
// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref("age").set(31);
// }, 9000);

// database
//   .ref("location")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(e => console.log("error" + e));

// database
//   .ref()
//   .set({
//     name: "Blade Demon",
//     age: 26,
//     isSingle: false,
//     location: {
//       city: "Shanghai",
//       country: "China"
//     }
//   })
//   .then(() => console.log("Data is saved."))
//   .catch(e => console.log("Data saved error."));

// database
//   .ref()
//   .update({
//     job: "Software Engineer",
//     isSingle: true
//   })
//   .then(() => {
//     console.log("Data is updated.");
//   })
//   .catch(e => {
//     console.log("remove error");
//   });
