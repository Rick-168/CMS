function uploadAssignment(formId) {
    var form = document.getElementById(formId);
    var fileInput = form.querySelector('input[type="file"]');
    var file = fileInput.files[0];

    if (file) {
        // You can perform further actions here, such as sending the file to a server
        // For now, just log the file details to the console
        console.log(`Subject: ${formId}, File Name: ${file.name}, File Size: ${formatFileSize(file.size)}`);
    } else {
        alert("Please choose a file to upload.");
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
