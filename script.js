function showHomework() {
    const homeworkContent = document.getElementById("homework-content");
    homeworkContent.innerHTML = "<p>Math: Solve 10 algebra equations.</p><p>Science: Read Chapter 5 and summarize.</p>";
}
const homeworkList = [
    { subject: "Math", task: "Solve 10 algebra equations." },
    { subject: "Science", task: "Read Chapter 5 and summarize." },
    { subject: "English", task: "Write a short story about your weekend." },
    { subject: "History", task: "Research the causes of World War II." },
    { subject: "PE", task: "Practice 10 push-ups and 10 sit-ups." },
    { subject: "Art", task: "Draw a landscape using shading techniques." },
    { subject: "Geography", task: "Label all 50 states on a map." },
    { subject: "Spanish", task: "Practice 5 Spanish vocabulary words." }
];

function getHomework() {
    let content = "";
    homeworkList.forEach(hw => {
        content += `<p><strong>${hw.subject}:</strong> ${hw.task}</p>`;
    });
    document.getElementById("homework-content").innerHTML = content;
}
function addHomework() {
    let subject = document.getElementById("subject").value;
    let task = document.getElementById("task").value;

    if (subject && task) {
        homeworkList.push({ subject, task });
        getHomework();  // Refresh the list
    } else {
        alert("Please enter both a subject and a task.");
    }
}
