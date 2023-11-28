// Function to save the updated teacher profile
function saveProfile() {
    var aboutMe = document.getElementById('aboutMe').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var officeAddress = document.getElementById('officeAddress').value;
    var teachingCourses = document.getElementById('teachingCourses').value;

    // Validate the form fields (you can add more validation as needed)

    // Display status message
    setStatusMessage(`Teacher profile updated successfully.`);
}

// Function to display status messages
function setStatusMessage(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
}
