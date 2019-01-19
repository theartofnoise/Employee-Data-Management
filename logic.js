$(document).ready(function () {
    var rowNumber = 2;
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
        `
        $('#topRow').append(newRow);
        rowNumber++;
    });
});

