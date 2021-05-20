/** HERE WE WRITE JAVASCRIPT **/

var image = document.getElementById("image");
var images = ["pictures/edward-xu-eTVe9uwYV84-unsplash%20(1).png", "pictures/andie-gomez-acebo-sEq4onJnWrI-unsplash.png", "pictures/EstTnfPW4AE8Y_G.jpg"]
var currentImage = 0;

function changePhotoLoop() {
    image.src = images[currentImage];

    if (++currentImage >= images.length)
        currentImage = 0;
}

setInterval(changePhotoLoop, 8000);



/** filter options can be selected on shop page **/

function myFunction() {
  document.getElementById("filter_button1").style.cssText = "opacity: 100%; font-weight: 700;";
}
function myFunction2() {
  document.getElementById("filter_button2").style.cssText = "opacity: 100%; font-weight: 700;";
}
function myFunction3() {
  document.getElementById("filter_button3").style.cssText = "opacity: 100%; font-weight: 700;";
}
function myFunction4() {
  document.getElementById("filter_button4").style.cssText = "opacity: 100%; font-weight: 700;";
}
function myFunction5() {
  document.getElementById("filter_button5").style.cssText = "opacity: 100%; font-weight: 700;";
}
function myFunction6() {
  document.getElementById("filter_button6").style.cssText = "opacity: 100%; font-weight: 700;";
}


/** dropdown on product page **/

