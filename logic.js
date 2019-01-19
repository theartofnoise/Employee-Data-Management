$(document).ready(function () {
    var rowNumber = 2;

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


    $('#submitEmployee').on('click', function (event) {
        event.preventDefault();

        var empName = $("#nameIn");
        var empRole = $("#roleIn");
        var empStart = $("#startIn");
        var empRate = $("#rateIn");

        var newEmp = {
            name: empName,
            role: empRole,
            start: empStart,
            rate: empRate
        }

        db.push(newEmp);
    });

    db.on('value', function (snapshot) {

        var newRow =
            `
            <tr>
                <th> ` + rowNumber + ` </th>
                < td > ` + snapshot.val().name + ` < /td>
                < td > ` + snapshot.val().role + ` < /td>
                < td > ` + snapshot.val().start + ` < /td>
                <td> missing Data </td>
                < td > ` + snapshot.val().rate + ` < /td>
                <td> missing Data </td>
            </tr>
        `
        $('#topRow').append(newRow);
        rowNumber++;
    }, function (errorObject) {
        console.log('Error: ' + errorObject);
    });
});