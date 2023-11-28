function login() {
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate the entered credentials (replace with your own logic)
    if (isValidCredentials(username, password)) {
        // Redirect to the student.html page
        window.location.href = 'admin.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function isValidCredentials(username, password) {
    if(username=="admin" & password=="adminpassword")
    // For simplicity, this example accepts any username and password
    return true;
}
