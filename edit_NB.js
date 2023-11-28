function uploadNotice() {
    event.preventDefault();

    // Get form values
    var title = document.getElementById("noticeTitle").value;
    var content = document.getElementById("noticeContent").value;

    // Validate form values
    if (!title || !content) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new notice item
    var noticeList = document.getElementById("noticeList");
    var newNoticeItem = document.createElement("div");
    newNoticeItem.classList.add("notice-item");
    newNoticeItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

    // Append the new notice item to the notice list
    noticeList.appendChild(newNoticeItem);

    // Clear form fields
    document.getElementById("noticeTitle").value = "";
    document.getElementById("noticeContent").value = "";
}
