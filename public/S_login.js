function login() {
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate the entered credentials (replace with your own logic)
    if (isValidCredentials(username, password)) {
        // Redirect to the student.html page
        window.location.href = 'student.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function isValidCredentials(username, password) {
    if(username=="student" & password=="studentpassword")
    // For simplicity, this example accepts any username and password
    return true;
}
