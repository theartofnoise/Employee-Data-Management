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
    $('#topRow').append(newRow) 
    $('#topRow').appendchild(tHead) 
    $('#topRow').appendchild(newData) 
});

