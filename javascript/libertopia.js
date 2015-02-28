function init() {

//swipe to go forward/backward in schedule

$( ".container" ).on( "swipeleft swiperight", "", swipeHandler);

function swipeHandler( e ){
  	if ( e.type === "swipeleft"  ) {
		var main = document.getElementById("main");
		main.setAttribute("class", "main page2");
		
	} else if ( e.type === "swiperight" ) {
		var main = document.getElementById("main");
		main.setAttribute("class", "main page1");
		
	};
};

//functions to open/close menu and open/close menuButton

function menuOpen () {
	
	var menu = document.getElementById("menu");
	var menuContainer = document.getElementById("menuContainer");
	var menuButton = document.getElementById("menuButton");
	
	menu.setAttribute("class", "menu menuOpen");
	menuContainer.setAttribute("class", "menuContainer menuOpen");
	menuButton.setAttribute("class", "menuButton menuButtonOpen");

};

function menuClose() {
	
	var menu = document.getElementById("menu");
   var menuContainer = document.getElementById("menuContainer");
	var menuButton = document.getElementById("menuButton");
	
   menu.setAttribute("class", "menu menuClose");
   menuContainer.setAttribute("class", "menuContainer menuClose");
	menuButton.setAttribute("class", "menuButton menuButtonClose");
	
};

//swipe menuContainer to open/close menu

 $( ".menuContainer" ).on( "swipeleft swiperight", "", function( e ) {
         if ( e.type === "swiperight"  ) { 
         	menuOpen();
         } else if ( e.type === "swipeleft"  ) {
         	menuClose();
			}     
     });

//open/close menu when clicking on hamburger button

var menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click', function() {
	var menu = document.getElementById("menu");
	if ( menu.getAttribute("class") === "menu menuOpen" ) {
		menuClose();
	} else if ( menu.getAttribute("class") === "menu menuClose" ) {
		menuOpen();
	};
	}, false);

//Select lecture for personalized schedule
var favStar11 = document.getElementById("favStar11");

	favStar11.addEventListener('click', function() {
		favStar11.setAttribute("src", "images/fav.png");
		favStar12.setAttribute("src", "images/add-fav.png");
		favStar13.setAttribute("src", "images/add-fav.png");
		favStar14.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar12 = document.getElementById("favStar12");
		
	favStar12.addEventListener('click', function() { 
		favStar11.setAttribute("src", "images/add-fav.png");
		favStar12.setAttribute("src", "images/fav.png");
		favStar13.setAttribute("src", "images/add-fav.png");
		favStar14.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar13 = document.getElementById("favStar13");
		
	favStar13.addEventListener('click', function() { 
		favStar11.setAttribute("src", "images/add-fav.png");
		favStar12.setAttribute("src", "images/add-fav.png");
		favStar13.setAttribute("src", "images/fav.png");
		favStar14.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar14 = document.getElementById("favStar14");
	
	favStar14.addEventListener('click', function() { 
		favStar11.setAttribute("src", "images/add-fav.png");
		favStar12.setAttribute("src", "images/add-fav.png");
		favStar13.setAttribute("src", "images/add-fav.png");
		favStar14.setAttribute("src", "images/fav.png");
	}, false);
	


var favStar21 = document.getElementById("favStar21");

	favStar21.addEventListener('click', function() {
		favStar21.setAttribute("src", "images/fav.png");
		favStar22.setAttribute("src", "images/add-fav.png");
		favStar23.setAttribute("src", "images/add-fav.png");
		favStar24.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar22 = document.getElementById("favStar22");
		
	favStar22.addEventListener('click', function() { 
		favStar21.setAttribute("src", "images/add-fav.png");
		favStar22.setAttribute("src", "images/fav.png");
		favStar23.setAttribute("src", "images/add-fav.png");
		favStar24.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar23 = document.getElementById("favStar23");
		
	favStar23.addEventListener('click', function() { 
		favStar21.setAttribute("src", "images/add-fav.png");
		favStar22.setAttribute("src", "images/add-fav.png");
		favStar23.setAttribute("src", "images/fav.png");
		favStar24.setAttribute("src", "images/add-fav.png");
	}, false);

var favStar24 = document.getElementById("favStar24");
	
	favStar24.addEventListener('click', function() { 
		favStar21.setAttribute("src", "images/add-fav.png");
		favStar22.setAttribute("src", "images/add-fav.png");
		favStar23.setAttribute("src", "images/add-fav.png");
		favStar24.setAttribute("src", "images/fav.png");
	}, false);
	
};
window.onload = init;
