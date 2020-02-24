document.onkeydown = keyHit;
var thisPic = 0;

function keyHit(evt) {
	var myPix = new Array("images/mwr2.jpg","images/bo2.jpg","images/ssbb2.jpg","images/me22.jpg","images/halo32.jpg");
	var imgCt  = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;

	if(evt) {
		var thisKey = evt.which;
	}
	else {
		var thisKey = window.event.keyCode;
	}

	if(thisKey == ltArrow) {
		chgSlide(-1);
	}
	if(thisKey == rtArrow) {
		chgSlide(1);
	}
	return false;

	function chgSlide(direction) {
		thisPic = thisPic + direction;
		
		if(thisPic > imgCt) {
			thisPic = 0;
		}

		if(thisPic < 0) {
			thisPic = imgCt;
		}
		document.getElementById("scshot").src = myPix[thisPic];
	}

}