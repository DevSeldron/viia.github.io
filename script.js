window.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('change-theme-button');
  const body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  });
});

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", function() {
    if (container.classList.contains("dark-theme")) {
      container.classList.remove("dark-theme");
      container.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    } else {
      container.classList.remove("light-theme");
      container.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  });
window.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('change-theme-button');
  const body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  });
// Select the button
const btn = document.querySelector(".change-theme-button");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
// If the current theme in localStorage is "dark"...

if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");
}
// Listen for a click on the button 
  
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");
  
  // Let's say the theme is equal to light
  
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    
    theme = "dark";
  }
  // Then save the choice in localStorage
  
  localStorage.setItem("theme", theme);
});

