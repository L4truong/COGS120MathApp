'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

//	$('.friend a').click(function(e) {
//		e.preventDefault();
//		$(this).find('h3').text(anagrammedName($(this).text()));
//	});

/*	$('.btn btn-default p').click(function(e) {
		e.preventDefault();
		console.log("Button!");
	});*/
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

/*function anagrammedName(name) {
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}*/