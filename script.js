// script.js

// Function to show the popup and handle the redirection
function showPopup(event, url) {
  event.preventDefault(); // Prevent the default link behavior
  var popup = document.getElementById("popup");
  popup.classList.add("show");
  setTimeout(function() {
    window.location.href = url; // Redirect to the clicked URL
  }, 5000);
}

// Add event listeners to the links
var links = document.querySelectorAll(".menu a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    var url = this.getAttribute("href");
    showPopup(event, url);
  });
}

var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    var url = this.getAttribute("href");
    showPopup(event, url);
  });
}
