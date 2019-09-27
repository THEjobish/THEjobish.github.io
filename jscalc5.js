



function taken1()
{
var num1 = prompt("Please enter your first number");
var num2 = prompt("Please enter your second number");
var num3 = prompt("please enter your third number");
if(isNaN(num1)||isNaN(num2)||isNaN(num3)){
alert("one or more inputs are not number!"
}else{
alert("Sum is: " + (num1+num2+num3));
alert("Product is: " + (num1*num2*num3));
}}