const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const container = document.getElementById('container');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Store the current theme preference in local storage
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});
