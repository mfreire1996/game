var wheel = function() {
	var wheel = document.getElementById('wheel') 
	var wheelValues = [5000,600,500,300,500,800,550,400,300,900,500,300,900,0,600,400,300,2,800,350,450,700,300,600]
}
	
var img = document.querySelector('img'); //the querySelector method returns the first element that matches a specidified CSS in the document
// The querySelector() method only returns the first element that matches the specified selectors. 
img.addEventListener('click', onClick, false); //addEventListener method attach an event handler to an element so that you can do something useful when an event is triggered. 



function onClick() {
    this.removeAttribute('style');
    
    var deg = 500 + Math.round(Math.random() * 500); //what math.round do is that it rounds to the nearest integer
    
    var css = '-webkit-transform: rotate(' + deg + 'deg);';
    
    this.setAttribute(
        'style', css
    );
} 

// var consonant = prompt("Please enter a consonant", " ");

