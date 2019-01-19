$(document).ready(function () {
    var rowNumber = 2;

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

    $('#submitEmployee').on('click', function (event) {
        event.preventDefault();
        var newRow = 
        `
            <tr>
                <th> ` + rowNumber +` </th>
                <td>test` + rowNumber +`</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `
        $('#topRow').append(newRow);
        rowNumber++;
    });
});