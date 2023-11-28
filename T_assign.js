function uploadAssignment(type) {
    event.preventDefault();

    // Get form values
    var subject = document.getElementById(`subject${type.charAt(0).toUpperCase() + type.slice(1)}`).value;
    var fileInput = document.getElementById(`${type}File`);
    var file = fileInput.files[0];

    // Validate form values
    if (!subject || !file) {
        alert('Please fill out all fields.');
        return;
    }

    // Perform further actions (e.g., send data to server, display a confirmation message)
    console.log(`Subject: ${subject}, Type: ${type}, File Name: ${file.name}, File Size: ${formatFileSize(file.size)}`);

    // Clear form fields
    document.getElementById(`subject${type.charAt(0).toUpperCase() + type.slice(1)}`).value = "";
    fileInput.value = "";
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
