function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Please input a name.");
    return false;
  }
   
  var y = document.forms["myForm"]["age"].value;
   if (y < 18 || y > 110) {
	   alert("Age must be between 18 and 110.");
	   return false;
   }
   var z = document.forms["myForm"]["radio"].value;
   if (z < 1) {
	   alert("Please select a school.");
	   return false;
   }
  else {
	  //don't need to return true if condition is assumed true
	  alert("Success!");
  }
  
  
  
  
  
  
  
  
  
}