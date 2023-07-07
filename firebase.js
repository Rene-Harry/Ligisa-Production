const firebaseConfig = {
    apiKey: "AIzaSyD0Yg3YCtWt-RAagyn6_pXK_Wa9iX0Fvwc",
    authDomain: "ligisavolunteerform.firebaseapp.com",
    databaseURL: "https://ligisavolunteerform-default-rtdb.firebaseio.com",
    projectId: "ligisavolunteerform",
    storageBucket: "ligisavolunteerform.appspot.com",
    messagingSenderId: "1031065783462",
    appId: "1:1031065783462:web:77d330dfe389d89ea8b867"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service

var volunteersDB = firebase.database().ref('volunteers');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    
    
    saveVolunteers(name, email, subject, message);
    
    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 2000);
    
    document.getElementById('contact-form').reset();
    }

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveVolunteers(name, email, subject, message) {
    var newVolunteersForm = volunteersDB.push();
    newVolunteersForm.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}