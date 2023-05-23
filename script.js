const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

let clickCounter = 0;
let secretModeTimeout;

// Retrieve the saved theme from local storage when the page loads
window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
  } else if (savedTheme === 'light-mode') {
    body.classList.add('light-mode');
  }
});

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light-mode') {
    document.body.classList.add('light-mode');
  }
});

toggleButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  clearTimeout(secretModeTimeout); // Clear the previous timeout

  clickCounter++;

  // Check if the secret theme should be triggered
  if (clickCounter >= 5) {
    clickCounter = 0; // Reset the click counter
    activateSecretMode();
  } else {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  }

  // Store the current theme preference in local storage
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});

function activateSecretMode() {
  body.classList.add('secret-mode');
  toggleButton.classList.add('disabled'); // Add a disabled class to style the disabled button appearance

  // Clear the secret mode after 3 seconds
  secretModeTimeout = setTimeout(function() {
    body.classList.remove('secret-mode');
    toggleButton.classList.remove('disabled'); // Remove the disabled class
  }, 3000);
window.addEventListener('DOMContentLoaded', function() {
