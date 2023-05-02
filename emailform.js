$(function() {
    // Listen for the form's submit event
    $('#contact-form').submit(function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the form data
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
      };
  
      // Send the form data to the server using an AJAX request
      $.ajax({
        type: 'POST',
        url: '/send-email',
        data: formData,
        success: function() {
          // Handle a successful response from the server
          alert('Your message has been sent.');
        },
        error: function() {
          // Handle an error response from the server
          alert('There was an error sending your message.');
        }
      });
    });
  });
  