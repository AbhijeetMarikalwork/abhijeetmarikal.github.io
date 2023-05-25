// main.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Perform form submission logic here
  
      // Display success message
      alert('Thank you for your message!');
      form.reset();
    });
  });
  