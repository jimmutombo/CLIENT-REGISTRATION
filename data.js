// Initialize Firebase
const app = initializeApp(firebaseConfig);

var firebaseConfig = {
	apiKey: "AIzaSyDF5LqLHUSN0kWYnXNeqHrFprl14Ggtg80",
    authDomain: "client-registration-3fbf8.firebaseapp.com",
    databaseURL: "https://client-registration-3fbf8-default-rtdb.firebaseio.com",
    projectId: "client-registration-3fbf8",
    storageBucket: "client-registration-3fbf8.appspot.com",
    messagingSenderId: "1069322992988",
    appId: "1:1069322992988:web:cd1a35244b6ae300241599"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var  clientRegistration = firebase.database().ref ("record-form");

// Get a reference to the client registration form
var recordForm = document.getElementById("record-form");
document.getElementById("record-form").addEventListener("submit", submitForm);

  // Get the form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var department = document.getElementById("department").value;

  // Create a new client registration object
  var newClientRegistration = {
    name: name,
    email: email,
    dob: dob,
    address: address,
    department: department
  };

  // Get a new key for the client registration object
  var newClientRegistrationKey = database.ref().child("CLIENT-REGISTRATION").push().key;

  // Save the client registration object to the database
  var updates = {};
  updates["/CLIENT-REGISTRATION/" + newClientRegistrationKey] = newClientRegistration;
  database.ref().update(updates);

  // Clear the form
  form.reset();

  // Display a success message to the user
  alert("Client registration saved successfully!");
});

