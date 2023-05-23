window.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');
  const confirmationDialog = document.getElementById('confirmation-dialog');
  const cancelButton = document.getElementById('cancel-button');
  const okButton = document.getElementById('ok-button');

  // Function to show the confirmation dialog
  function showConfirmationDialog(url) {
    confirmationDialog.classList.remove('hidden');
    
    cancelButton.addEventListener('click', function() {
      confirmationDialog.classList.add('hidden');
    });

    okButton.addEventListener('click', function() {
      window.location.href = url; // Redirect to the clicked URL
    });
  }

  // Add click event listener to each link
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      const url = link.getAttribute('href');
      showConfirmationDialog(url);
    });
  });
});
