//Heading

var d = new Date();
document.getElementById("todaysDate").innerHTML =
	d.getMonth() + 1 + "/" + (d.getDate() + 1);

//Part-One

var button = document.getElementById("button");
var onButtonClick = function() {
	var name = document.getElementById("name").value;
	var preRating = document.getElementById("preRating").value;
	var greeting;
	if (preRating === "one") {
		greeting =
			"Hello, " +
			name +
			". I think you should try Lesson 1 again, and if you're still struggling, contact your teacher!";
	} else if (preRating === "two") {
		greeting =
			"Hello, " +
			name +
			". Why don't you head over to Lesson 1, and try some of the We Do questions again?";
	} else if (preRating === "three") {
		greeting =
			"Hello, " +
			name +
			". Have you considered reviewing some of the I Do sections from Lesson 1?";
	} else if (preRating === "four") {
		greeting =
			"Hello, " + name + ". That's great! Let's continue with this lesson.";
	} else if (preRating === "five") {
		greeting =
			"Hello, " +
			name +
			". That's pretty impressive, but let's see if we can add on with this lesson!";
	} else {
		greeting = " ";
	}
	document.getElementById("message").textContent += greeting;
};
button.addEventListener("click", onButtonClick);

// Part-Two
// Background Change with Answer Part

var x = document.querySelectorAll("p");

x[0].style.backgroundColor = "#E3F2FD";
x[1].style.backgroundColor = "#E3F2FD";

// First Question

function oneQuestionA() {
	alert(
		"Incorrect - This is giving information for chronological. This order is sequence."
	);
}

function oneQuestionB() {
	alert(
		"Correct! This information will add on to the sequence for how to make pizza."
	);
}

// Second Question
function twoQuestion() {
	let inputEl = document.querySelector('input[name="questionTwo"]:checked');
	let answer = inputEl.value;
	if (answer === "one") {
		alert("Incorrect - This information is just describing what is in pizza!");
	} else {
		alert(
			"Correct - the information helps us with the chronological order of events already being listed!"
		);
	}
}

// Part-Three
// First Question

var i = 0;
var images = [];
var time = 3000;

images[0] = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1998374/Peanut.jpg";
images[1] = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1998374/Jelly.jpg";
images[2] = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1998374/Together.jpg";

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

// Answer Section For First Question

var button = document.getElementById("button1");
var onButtonClick = function() {
	var comment1 = document.getElementById("comment1").value;
	var greeting1 =
		"Nice work! Miss Babin will check your work tomorrow. Please continue to the next question.";
	document.getElementById("message1").textContent += greeting1;
};
button.addEventListener("click", onButtonClick);

// Second Question

var Image = new Array(
	"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1998374/Water.jpg",
	"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1998374/Boil.jpg",
	"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1998374/Pasta.jpg"
);

var Image_Number = 0;
var Image_Length = Image.length - 1;

function change_image(num) {
	Image_Number = Image_Number + num;

	if (Image_Number > Image_Length) {
		Image_Number = 0;
	}

	if (Image_Number < 0) {
		Image_Number = Image_Length;
	}

	document.slideshow.src = Image[Image_Number];

	return false;
}

// Answer Section For Second Question

var button = document.getElementById("button2");
var onButtonClick = function() {
	var comment2 = document.getElementById("comment2").value;
	var greeting2 =
		"Nice work! Miss Babin will check your work tomorrow. Please continue to Part Four.";
	document.getElementById("message2").textContent += greeting2;
};
button.addEventListener("click", onButtonClick);

// Part-Four

function toggleClass(el) {
	var final = document.getElementById('finalRating').children;
	for (var i = 0; i < final.length; i++) {
		final[i].className = "class1";
	}
	el.className = "class2";
}

// Last Check

function myFunction() {
    document.getElementById("print").innerHTML = "You read all the directions - you're awesome!";
}

var lastQuestion = [
	{
		id: 4,
		question: "Are you awesome?"
		options: [ 
		"yes",
		"no"
		],
		answer: "yes"
	}
	]