let homeworkList = [
    { subject: "Math", task: "Solve 10 algebra equations.", link: "https://www.khanacademy.org/math" },
    { subject: "Science", task: "Read Chapter 5 and summarize.", link: "https://www.nationalgeographic.com/science" },
    { subject: "English", task: "Write a short essay on your favorite book.", link: "https://www.grammarly.com/blog/essay-writing/" },
    { subject: "History", task: "Research World War II causes.", link: "https://www.history.com/topics/world-war-ii" },
    { subject: "Geography", task: "Learn about the continents and oceans.", link: "https://www.nationalgeographic.org/education/" },
    { subject: "Computer Science", task: "Complete a basic JavaScript tutorial.", link: "https://www.w3schools.com/js/" }
];

function showHomework() {
    let content = "";
    homeworkList.forEach(hw => {
        content += `<p><strong>${hw.subject}:</strong> ${hw.task} 
        <a href="${hw.link}" target="_blank">[Learn More]</a></p>`;
    });
    document.getElementById("homework-content").innerHTML = content;
}

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
        alert("Please enter both subject and homework task.");
    }
}
