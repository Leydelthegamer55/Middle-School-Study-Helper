function showHomework() {
    document.getElementById("homeworkSection").style.display = "block";
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("addHomeworkSection").style.display = "none";
}

function showAddHomework() {
    document.getElementById("homeworkSection").style.display = "none";
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("addHomeworkSection").style.display = "block";
}

// Default homework data
let homeworkData = [
    { subject: "Math", title: "Algebra Basics", link: "https://www.khanacademy.org/math/algebra" },
    { subject: "Science", title: "Newton’s Laws", link: "https://www.khanacademy.org/science/physics" },
    { subject: "English", title: "Grammar and Writing", link: "https://www.grammarly.com/blog/grammar/" },
    { subject: "History", title: "World War II", link: "https://www.history.com/topics/world-war-ii" },
    { subject: "Computer Science", title: "Learn JavaScript", link: "https://www.w3schools.com/js/" }
];

function displayHomework() {
    let homeworkList = document.getElementById("homeworkList");
    homeworkList.innerHTML = ""; // Clear old list

    homeworkData.forEach(hw => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.textContent = `${hw.subject}: ${hw.title}`;
        link.href = hw.link;
        link.target = "_blank"; // Opens in new tab
        listItem.appendChild(link);
        homeworkList.appendChild(listItem);
    });
}

function addHomework() {
    let subject = document.getElementById("homeworkSubject").value;
    let title = document.getElementById("homeworkTitle").value;
    let link = document.getElementById("homeworkLink").value;

    if (subject && title && link) {
        homeworkData.push({ subject, title, link });
        displayHomework();
        alert("Homework added successfully!");
    } else {
        alert("Please fill out all fields.");
    }
}

document.addEventListener("DOMContentLoaded", displayHomework);
