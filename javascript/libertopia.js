function init() {

"use strict";

//fadeIn() and fadeOut() hidePanel() functions

function fadeHidePanels( whichPanelStaysOpen ) {

	if ( whichPanelStaysOpen !== "schedule" ) {
//		document.getElementById("schedule").setAttribute("class", "panel fadeOut");
		document.getElementById("schedule").setAttribute("class", "panel hidden");		
	};
	
	if ( whichPanelStaysOpen !== "mySchedule" ) {
//		document.getElementById("mySchedule").setAttribute("class", "panel fadeOut");
		document.getElementById("mySchedule").setAttribute("class", "panel hidden");			
	};
	
	if ( whichPanelStaysOpen !== "search" ) {
//		document.getElementById("search").setAttribute("class", "panel fadeOut");
		document.getElementById("search").setAttribute("class", "panel hidden");		
	};
	
	if ( whichPanelStaysOpen !== "map" ) {
//		document.getElementById("map").setAttribute("class", "panel fadeOut");
		document.getElementById("map").setAttribute("class", "panel hidden");	
	};
	
	if ( whichPanelStaysOpen !== "feedback" ) {
//		document.getElementById("feedback").setAttribute("class", "panel fadeOut");
		document.getElementById("feedback").setAttribute("class", "panel hidden");		
	};
		
};

//show panel function

function showPanel( whichPanelFadesIn ) {
	
	if ( whichPanelFadesIn === "schedule" ) {
//		document.getElementById("schedule").setAttribute("class", "panel fadeOut");
		document.getElementById("schedule").setAttribute("class", "panel fadeIn")		
	};
	
	if ( whichPanelFadesIn === "mySchedule" ) {
//		document.getElementById("mySchedule").setAttribute("class", "panel fadeOut");
		document.getElementById("mySchedule").setAttribute("class", "panel fadeIn");			
	};
	
	if ( whichPanelFadesIn === "search" ) {
//		document.getElementById("search").setAttribute("class", "panel fadeOut");
		document.getElementById("search").setAttribute("class", "panel fadeIn");		
	};
	
	if ( whichPanelFadesIn === "map" ) {
//		document.getElementById("map").setAttribute("class", "panel fadeOut");
		document.getElementById("map").setAttribute("class", "panel fadeIn");	
	};
	
	if ( whichPanelFadesIn === "feedback" ) {
//		document.getElementById("feedback").setAttribute("class", "panel fadeOut");
		document.getElementById("feedback").setAttribute("class", "panel fadeIn");		
	};
	
};

//menu buttons

var menuOptionSchedule = document.getElementById("menuOptionSchedule");
var menuOptionMySchedule = document.getElementById("menuOptionMySchedule");
var menuOptionearch = document.getElementById("menuOptionSearch");
var menuOptionMap = document.getElementById("menuOptionMap");
var menuOptionFeedback = document.getElementById("menuOptionFeedback");

menuOptionSchedule.addEventListener('click', function() {
	document.getElementById('pageTitle').innerHTML = 'SCHEDULE';
	menuClose();
	fadeHidePanels( "schedule" ); //every panel except this parameter will fade out and hide
	showPanel( "schedule" );
	}, false);

menuOptionMySchedule.addEventListener('click', function() {
	document.getElementById('pageTitle').innerHTML = 'MY SCHEDULE';
	menuClose();
	fadeHidePanels( "mySchedule" ); //every panel except this parameter will fade out and hide
	showPanel( "mySchedule" );	
	}, false);
	
menuOptionSearch.addEventListener('click', function() {
	document.getElementById('pageTitle').innerHTML = 'SEARCH';
	menuClose();
	fadeHidePanels( "search" ); //every panel except this parameter will fade out and hide
	showPanel( "search" );		
	}, false);
	
menuOptionMap.addEventListener('click', function() {
	document.getElementById('pageTitle').innerHTML = 'MAP';
	menuClose();
	fadeHidePanels( "map" ); //every panel except this parameter will fade out and hide
	showPanel( "map" );		
	}, false);
	
menuOptionFeedback.addEventListener('click', function() {
	document.getElementById('pageTitle').innerHTML = 'FEEDBACK';
	menuClose();
	fadeHidePanels( "feedback" ); //every panel except this parameter will fade out and hide
	showPanel( "feedback" );		
	}, false);



var options = {
  valueNames: [ 'name' ]
};

var userList = new List('users', options);


//swipe to go forward/backward in schedule

$( ".container" ).on( "swipeleft swiperight", "", swipeHandler);

function swipeHandler( e ){
  	if ( e.type === "swipeleft"  ) {
		var schedule = document.getElementById("schedule");
		schedule.setAttribute("class", "panel page2");
		
	} else if ( e.type === "swiperight" ) {
		var schedule = document.getElementById("schedule");
		schedule.setAttribute("class", "panel page1");
		
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
