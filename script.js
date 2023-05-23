const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const body = document.body;

menuToggle.addEventListener('change', function() {
  body.classList.toggle('menu-open');
});

let clickCounter = 0;
let secretModeTimeout;
let isSecretModeActive = false;

function activateSecretMode() {
  body.classList.add('secret-mode');
  menuToggle.classList.add('disabled'); // Add a disabled class to style the disabled button appearance
  changeThemeButton.disabled = true; // Disable the "Change Theme" button

  isSecretModeActive = true;

  // Clear the secret mode after 3 seconds
  secretModeTimeout = setTimeout(function() {
    body.classList.remove('secret-mode');
    menuToggle.classList.remove('disabled'); // Remove the disabled class
    changeThemeButton.disabled = false; // Enable the "Change Theme" button
    isSecretModeActive = false;
  }, 3000);
}

// Check for saved theme and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.checked = savedTheme === 'dark-mode';
}

// Function to toggle the theme
function toggleTheme() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
}

// Attach change event listener to the theme toggle checkbox
themeToggle.addEventListener('change', function() {
  // Check if the secret mode is active
  if (!isSecretModeActive) {
    // Toggle the theme
    toggleTheme();
  }
});

// Get the existing change theme button
const changeThemeButton = document.getElementById('change-theme-button');

// Attach click event listener to the change theme button
changeThemeButton.addEventListener('click', function() {
  // Check if the secret mode is active
  if (!isSecretModeActive) {
    // Toggle the theme
    toggleTheme();

    // Increment the click counter
    clickCounter++;

    // Check if the secret mode should be triggered
    if (clickCounter >= 5) {
      clickCounter = 0; // Reset the click counter
      activateSecretMode();
    }
  }
});
