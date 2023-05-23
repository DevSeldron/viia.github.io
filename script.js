window.addEventListener('DOMContentLoaded', function() {
  // Function to show the popup and handle the redirection
  function showPopup(event, url) {
    event.preventDefault(); // Prevent the default link behavior
    const popup = document.getElementById('popup');
    popup.textContent = 'Redirecting to ' + url + '...';
    popup.classList.add('show');
    setTimeout(function() {
      window.location.href = url; // Redirect to the clicked URL
    }, 5000);
  }

  // Add event listener to the document
  document.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor tag
    if (event.target.tagName === 'A') {
      const url = event.target.getAttribute('href');
      showPopup(event, url);
    }
  });
});
