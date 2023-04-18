const form = document.getElementById('signup-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

function submitForm(event) {
    event.preventDefault();

    // Check if username and password meet required format
    const usernameRegex = /^[a-zA-Z0-9]{1,8}$/;
    const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,8}$/;

    if (!usernameRegex.test(username.value)) {
        errorMessage.innerHTML = 'Username must be up to 8 alphanumeric characters';
        return;
    }

    if (!passwordRegex.test(password.value)) {
        errorMessage.innerHTML = 'Password must be up to 8 alphanumeric characters and contain at least one special character';
        return;
    }

    alert("Form Submitted Successfully!");

    // // Submit form data
    // const data = {
    //     firstName: firstName.value,
    //     lastName: lastName.value,
    //     email: email.value,
    //     username: username.value,
    //     password: password.value
    // };

    // // Replace with your form submission endpoint
    // const endpoint = 'https://example.com/submit';

    // fetch(endpoint, {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    // })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         alert('Form submitted successfully!');
    //     })
    //     .catch(error => {
    //         console.error('There was a problem submitting the form:', error);
    //         alert('There was a problem submitting the form. Please try again later.');
    //     });
}