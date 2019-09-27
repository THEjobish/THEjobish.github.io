var totalRows = 5;
var cellsInRow = 5;
var min = 1;
var max = 10;

function drawTable() {      
var div1 = document.getElementById('div1');
var tbl = document.createElement("table");
for (var r = 0; r < totalRows; r++) {
var row = document.createElement("tr");
for (var c = 0; c < cellsInRow; c++) {
var cell = document.createElement("td");
getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
cell.appendChild(cellText);
row.appendChild(cell);
}           
tbl.appendChild(row); 
}
div1.appendChild(tbl); 
}
window.onload=drawTable; 