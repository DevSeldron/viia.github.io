const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const container = document.getElementById('container');

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});
