// Sample list of help desk requests
var helpDeskRequests = [
    { id: 1, user: 'John Watson', issue: 'Login problem', status: 'Open' },
    { id: 2, user: 'James Moriarty', issue: 'Cannot access pdf in E-libray', status: 'Open' },
    // Add more requests as needed
];

// Function to populate the "Reply Form" with request options
function populateRequestOptions() {
    var selectedRequestSelect = document.getElementById('selectedRequest');

    // Clear existing options
    selectedRequestSelect.innerHTML = '';

    // Add each request as an option
    helpDeskRequests.forEach(function (request) {
        var option = document.createElement('option');
        option.value = request.id;
        option.text = `${request.user} - ${request.issue} (${request.status})`;
        selectedRequestSelect.add(option);
    });
}

// Function to send a reply to a request
function sendReply() {
    var selectedRequestId = document.getElementById('selectedRequest').value;
    var replyMessage = document.getElementById('replyMessage').value;

    if (selectedRequestId !== '' && replyMessage) {
        // Find the selected request
        var selectedRequest = helpDeskRequests.find(request => request.id == selectedRequestId);

        if (selectedRequest) {
            // Update the status and display status message
            selectedRequest.status = 'Closed';
            setStatusMessage(`Reply sent to ${selectedRequest.user}'s request. Request closed.`);
        } else {
            setStatusMessage('Error: Request not found.');
        }
    } else {
        setStatusMessage('Please select a request and enter a reply.');
    }

    // Update request options in the "Reply Form"
    populateRequestOptions();
}

// Function to display status messages
function setStatusMessage(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
}
