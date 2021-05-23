/** HERE WE WRITE JAVASCRIPT **/

/** changeing images on home page **/
var image = document.getElementById("image");
var currentImage = 0;
var images = ["pictures/edward-xu-eTVe9uwYV84-unsplash%20(1).png", "pictures/andie-gomez-acebo-sEq4onJnWrI-unsplash.png", "pictures/EstTnfPW4AE8Y_G.jpg"]

function changePhotoLoop() {
	image.src = images[currentImage];

	if (++currentImage >= images.length)
		currentImage = 0;
}

setInterval(changePhotoLoop, 8000);



/** filter options can be selected on shop page **/

function myFunction1() {
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



/** event listener for 'send message' button **/

document.getElementById("sendmssg").addEventListener("click", myFunction);

function myFunction() {
	alert("Your message has been sent. MOONVY will get back at you shortly.");


}



/** changes amount of products **/

var productAmount = 1;

function addOne() {
	productAmount++;

	document.getElementById('productAmount').innerHTML = productAmount;
	return true
}




/** product page hide and show product description **/

function hideFunction() {
	var paragraph = document.getElementById("description");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

function hideFunction2() {
	var paragraph = document.getElementById("details");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

function hideFunction3() {
	var paragraph = document.getElementById("shipping");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

/** in the product page changes the arrow next to description button **/
function changeArrow1() {
	var arrow = document.getElementById("arrow1");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}

function changeArrow2() {
	var arrow = document.getElementById("arrow2");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}

function changeArrow3() {
	var arrow = document.getElementById("arrow3");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}
