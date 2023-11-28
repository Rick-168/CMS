// Sample list of courses and subjects
var courses = [
    { name: 'Computer Science', subjects: ['Programming', 'Database', 'Algorithms'] },
    { name: 'Mathematics', subjects: ['Calculus', 'Linear Algebra', 'Statistics'] },
    // Add more courses as needed
];

// Function to populate the "Subjects" form with course options
function populateCourseOptions() {
    var selectedCourseSelect = document.getElementById('selectedCourse');

    // Clear existing options
    selectedCourseSelect.innerHTML = '';

    // Add each course as an option
    courses.forEach(function (course, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = course.name;
        selectedCourseSelect.add(option);
    });
}

// Function to add a new course
function addCourse() {
    var courseName = document.getElementById('courseName').value;

    // Add the new course to the list
    courses.push({ name: courseName, subjects: [] });

    // Update course options in the "Subjects" form
    populateCourseOptions();

    // Display status message
    setStatusMessage(`Course "${courseName}" added successfully.`);
}

// Function to add a new subject to a selected course
function addSubject() {
    var selectedCourseIndex = document.getElementById('selectedCourse').value;
    var subjectName = document.getElementById('subjectName').value;

    if (selectedCourseIndex !== '' && selectedCourseIndex >= 0 && selectedCourseIndex < courses.length) {
        // Add the new subject to the selected course
        courses[selectedCourseIndex].subjects.push(subjectName);

        // Display status message
        setStatusMessage(`Subject "${subjectName}" added to ${courses[selectedCourseIndex].name}.`);
    } else {
        setStatusMessage('Please select a course.');
    }
}

// Function to display status messages
function setStatusMessage(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
}
