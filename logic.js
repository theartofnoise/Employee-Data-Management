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


    $('#submit').on('click', function (event) {
        event.preventDefault();

        var empName = $("#nameIn");
        var empRole = $("#roleIn");
        var empStart = $("#startIn");
        var empRate = $("#rateIn");

        var newEmp = {
            name: empName.val(),
            role: empRole.val(),
            start: empStart.val(),
            rate: empRate.val()
        }

        db.push(newEmp);

        empName.val('');
        empRole.val('');
        empStart.val('');
        empRate.val('');
    });

    db.on('child_added', function (childSnapshot) {
        var newRow =
            `
            <tr>
                <th> ` + rowNumber + ` </th>
                <td> ` + childSnapshot.val().name + ` </td>
                <td> ` + childSnapshot.val().role + ` </td>
                <td> ` + childSnapshot.val().start + ` </td>
                <td> missing Data </td>
                <td> ` + childSnapshot.val().rate + ` </td>
                <td> missing Data </td>
            </tr>
        `
        $('#topRow').append(newRow);
        rowNumber++;
    }, function (errorObject) {
        console.log('Error: ' + errorObject);
    });
});