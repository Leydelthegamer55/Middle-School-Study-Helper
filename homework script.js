const homeworkList = [
    { subject: "Math", task: "Solve 10 algebra equations." },
    { subject: "Science", task: "Read Chapter 5 and summarize." }
];

function getHomework() {
    let content = "";
    homeworkList.forEach(hw => {
        content += `<p><strong>${hw.subject}:</strong> ${hw.task}</p>`;
    });
    document.getElementById("homework-content").innerHTML = content;
}
