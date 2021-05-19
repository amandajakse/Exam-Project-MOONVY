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

/** JS on shop page **/

// picture animation


//clickable filter names

// document.getElementById("myBtn").addEventListener("click", displayDate);
