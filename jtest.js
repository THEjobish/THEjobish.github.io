function flipImag() {
   dom = document.getElementById("amps").style;

//Flip the visibility adjective to whatever it is now
if (dom.visibility == "visible")

   dom.visibility = "hidden";
   //moveImage();
   //FunclDelay();
   // dom.visibility = "visible";
   //setTimeout("flipImag()",20);
// moveImage();
else
    dom.visibility = "visible";

}

function moveImage() {

var x = 5; //Starting Location - left
var y = 5; //Starting Location - top
dom = document.getElementById("amps").style;
if (dom.visibility == "visible")
       dom.visibility = "hidden";

   //Keep on moving the image until the target is achieved
   x = randomFromTo (5,400);
   y = randomFromTo (5,400);
   //Move the image to the new location
   document.getElementById("amps").style.top = x+"px";
   document.getElementById("amps").style.left = y+"px";

   FunclDelay();
}

function randomFromTo (from, to) {
   return Math.floor(Math.random() * (to - from + 1) + from);
   }

function FunclDelay()
{
setTimeout("flipImag()", 1000);
//flipImag();
}