// Sample list of books
var books = [
    { title: 'Data Structure Using C', author: 'Reema Thareja'},   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    // Add more books as needed
];

// Function to populate the "Remove Book" form with book options
function populateBookOptions() {
    var bookToRemoveSelect = document.getElementById('bookToRemove');

    // Clear existing options
    bookToRemoveSelect.innerHTML = '';

    // Add each book as an option
    books.forEach(function (book, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = `${book.title}  ${book.author}`;
        bookToRemoveSelect.add(option);
    });
}

// Function to add a book
function addBook() {
    var bookTitle = document.getElementById('bookTitle').value;
    var author = document.getElementById('author').value;

    // Add the new book to the list
    books.push({ title: bookTitle, author: author });

    // Update book options in the "Remove Book" form
    populateBookOptions();

    // Display status message
    setStatusMessage(`Book "${bookTitle}" by ${author} added successfully.`);
}

// Function to remove a book
function removeBook() {
    var bookToRemoveSelect = document.getElementById('bookToRemove');
    var selectedIndex = bookToRemoveSelect.value;

    if (selectedIndex !== '' && selectedIndex >= 0 && selectedIndex < books.length) {
        var removedBook = books.splice(selectedIndex, 1)[0];

        // Update book options in the "Remove Book" form
        populateBookOptions();

        // Display status message
        setStatusMessage(`Book "${removedBook.title}" by ${removedBook.author} removed successfully.`);
    } else {
        setStatusMessage('Please select a book to remove.');
    }
}

// Function to display status messages
function setStatusMessage(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
}
