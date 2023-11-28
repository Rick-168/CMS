// Function to save the edited student profile
function saveProfile() {
    var rollNo = document.getElementById('rollNo').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var program = document.getElementById('program').value;
    var enrollmentYear = document.getElementById('enrollmentYear').value;

    // Validate the form fields (you can add more validation as needed)

    // Display status message
    setStatusMessage(`Student profile for Roll No. ${rollNo} updated successfully.`);
}

// Function to display status messages
function setStatusMessage(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
}
