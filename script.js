// script.js
function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // You can add more complex validation logic as needed

    // If the form is valid, you can submit it or perform other actions here
    alert('Form submitted successfully!');
}
