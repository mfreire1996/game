var wheelOfFortune = document.getElementById('wheelOfFortune');

function wheelOfFortune () {
	this.current = 4;
}

var wheelOfFortune = new WinWheel ({
	'outerRadius' 	: 212, //sets the outer radius so that it will fit in the background.
	'innerRadius' 	: 75, // Make the wheel hollow so parts of it don't go all the way to the center
	'textFontSize' 	: 24, //Sets the default font size for the wheel such as money, lose a turn and prizes
	'textOrientation':'vertical', //Makes the text vertical so it goes down from the outside of wheel.
	'textAllignment':'outer', //Align text to outside of wheel.
	'numSegments'	:24, //Specify number of segments
	'segments'		: 	//define segments including color and text
	[					// font size and text color overriden on bankrupt segments.
		{'fillStyle' : '#red', 'text' : '300'},
		{'fillStyle' : '#green', 'text' : '450'},
		{'fillStyle' : '#pink', 'text' : '600'},
		{'fillStyle' : '#blue', 'text' : '750'},
		{'fillStyle' : '#orange', 'text' : '500'},
		{'fillStyle' : '#black', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#black'},
		{'fillStyle' : '#purple', 'text' : '3000'},
		{'fillStyle' : '#yellow', 'text' : '600'},
		{'fillStyle' : '#pink', 'text' : '700'},
		{'fillStyle' : '#red', 'text' : '350'},
		{'fillStyle' : '#green', 'text' : '500'},
		{'fillStyle' : '#orange', 'text' : '800'},
		{'fillStyle' : '#lavender', 'text' : '300'},
		{'fillStyle' : '#yellow', 'text' : '400'},
		{'fillStyle' : '#blue', 'text' : '650'},
		{'fillStyle' : '#red', 'text' : '1000'},
		{'fillStyle' : '#pink', 'text' : '500'},
		{'fillStyle' : '#orange', 'text' : '400'},
		{'fillStyle' : '#green', 'text' : '900'},
		{'fillStyle' : '#black', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#black'},
		{'fillStyle' : '#lavender', 'text' : '600'},
		{'fillStyle' : '#yellow', 'text' : '700'},
		{'fillStyle' : '#blue', 'text' : '800'},
		{'fillStyle' : '#white', 'text' : 'LOSE A TURN', 'textFontSize' : 12}
	],
	'animation' : 		//specifies the animation to use 
	{
		'type' 	   : 'spinToStop',
		'duration' : 8,
		'spins'	   : 3,
		'callbackFinished' : 'alertPrize()'
	}
 });

function alertPrize(){

var winningSegment = theWheel.getIndicatedSegment(); //gets the segment indicated by the arrow of the wheel background which is at 0 degrees

if (winningSegment.text == 'LOOSE TURN'){
	alert ('Sorry but you lose a turn.');
} else if (winningSegment.text == 'BANKRUPT'){
	alert('Oh no you have gone bankrupt!');
} else{
	alert('You habe won' + winningSegment.text);
}
}


}

