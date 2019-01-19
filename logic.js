
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAS0mQChNLM2WUtM8RpriXMxKahCMkdtTw",
    authDomain: "employee-data-managment-84984.firebaseapp.com",
    databaseURL: "https://employee-data-managment-84984.firebaseio.com",
    projectId: "employee-data-managment-84984",
    storageBucket: "employee-data-managment-84984.appspot.com",
    messagingSenderId: "194894590693"
  };
  firebase.initializeApp(config);

  var db = firebase.database().ref();


var newRow = $("<tr>");
var tHead = $("<th>");
var newData = $("<td>");

var empName = $("#nameIn");
var empRole = $("#roleIn");
var empStart = $("#startIn");
var empRate = $("#rateIn");

var newEmp = {
    name:empName,
    role:empRole,
    start:empStart,
    rate:empRate
}




$('#add').on('click', function () {
    $('#topRow').append(newRow) ;
    $('#topRow').append(tHead) ;
    $('#topRow').append(newData); 
});

