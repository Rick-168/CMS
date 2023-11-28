// Sample student details
var students = [
    { rollNumber: 'ABC123'},
    { rollNumber: '002', name: 'Jane Smith', age: 22, course: 'Mathematics' },
    // Add more student details as needed
];

// Function to display details based on roll number
function displayDetails(rollNumber) {
    var profileDetails = document.getElementById("profileDetails");
    var student = students.find(s => s.rollNumber === rollNumber);

    if (student) {
        profileDetails.innerHTML = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Course:</strong> ${student.course}</p>
        `;
    } else {
        profileDetails.innerHTML = '<p>Student not found.</p>';
    }
}

// Function to search for a student by roll number
function searchStudent() {
    var rollNumber = document.getElementById("rollNumber").value;
    displayDetails(rollNumber);
}

// Rest of the code remains unchanged
