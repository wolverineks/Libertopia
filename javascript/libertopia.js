function init() {

var favStar1 = document.getElementById("favStar1");

	favStar1.addEventListener('click', function() {
	favStar1.setAttribute("src", "images/fav.png");
	favStar2.setAttribute("src", "images/add-fav.png");
	favStar3.setAttribute("src", "images/add-fav.png");
	favStar4.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar2 = document.getElementById("favStar2");
		
	favStar2.addEventListener('click', function() { 
	favStar1.setAttribute("src", "images/add-fav.png");
	favStar2.setAttribute("src", "images/fav.png");
	favStar3.setAttribute("src", "images/add-fav.png");
	favStar4.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar3 = document.getElementById("favStar3");
		
	favStar3.addEventListener('click', function() { 
	favStar1.setAttribute("src", "images/add-fav.png");
	favStar2.setAttribute("src", "images/add-fav.png");
	favStar3.setAttribute("src", "images/fav.png");
	favStar4.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar4 = document.getElementById("favStar4");
	
	favStar4.addEventListener('click', function() { 
	favStar1.setAttribute("src", "images/add-fav.png");
	favStar2.setAttribute("src", "images/add-fav.png");
	favStar3.setAttribute("src", "images/add-fav.png");
	favStar4.setAttribute("src", "images/fav.png");
	}, false);









};
window.onload = init;
