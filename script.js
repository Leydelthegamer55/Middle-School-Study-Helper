// Function to show all homework
function showHomework() {
    let content = "<ul>";
    homeworkList.forEach(hw => {
        content += `<li><strong>${hw.subject}:</strong> ${hw.task} 
        <a href="${hw.link}" target="_blank">[Learn More]</a></li>`;
    });
    content += "</ul>";
    document.getElementById("homework-content").innerHTML = content;
}

// Function to add new homework
function addHomework() {
    let subject = document.getElementById("subject").value;
    let task = document.getElementById("task").value;
    let link = document.getElementById("link").value || "#";

    if (subject && task) {
        homeworkList.push({ subject, task, link });
        showHomework(); // Refresh the homework list
        document.getElementById("subject").value = "";
        document.getElementById("task").value = "";
        document.getElementById("link").value = "";
    } else {
        alert("Please enter both a subject and a homework task.");
    }
}
