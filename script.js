window.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('change-theme-button');
  const body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  });
});


  // Check if theme preference is stored in local storage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    container.classList.add(currentTheme);
  }

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
});

