function uploadAttendance() {
    // Get the entered roll numbers
    var rollNumbers = document.getElementById('rollNumbers').value;

    // Get the selected PDF file
    var pdfFileInput = document.getElementById('pdfFile');
    var pdfFile = pdfFileInput.files[0];

    if (rollNumbers && pdfFile) {
        // Split the entered data into lines
        var lines = rollNumbers.split('\n');

        // Process each line (roll number)
        lines.forEach(function (rollNumber) {
            // Simulate processing time
            simulateUpload(rollNumber, pdfFile.name);
        });

        setStatusMessage(`Attendance uploaded successfully for ${lines.length} students.`);
    } else {
        setStatusMessage('Please enter roll numbers and select a PDF file.');
    }
}

function simulateUpload(rollNumber, pdfFileName) {
    // Simulate processing time
    setTimeout(function () {
        console.log(`Uploaded attendance for Roll Number ${rollNumber} from ${pdfFileName}`);
    }, 2000);
}

function setStatusMessage(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
}
