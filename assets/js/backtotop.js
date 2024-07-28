// Get the button
var mybutton = document.getElementById("backtotop");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function(event){
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});