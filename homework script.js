function showHomework() {
    document.getElementById("homeworkSection").style.display = "block";
    document.getElementById("quizSection").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    let homeworkData = [
        { subject: "Math", title: "Algebra Basics", link: "https://www.khanacademy.org/math/algebra" },
        { subject: "Science", title: "Newton’s Laws", link: "https://www.khanacademy.org/science/physics" },
        { subject: "English", title: "Grammar and Writing", link: "https://www.grammarly.com/blog/grammar/" },
        { subject: "History", title: "World War II", link: "https://www.history.com/topics/world-war-ii" },
        { subject: "Computer Science", title: "Learn JavaScript", link: "https://www.w3schools.com/js/" }
    ];

    let homeworkList = document.getElementById("homeworkList");

    homeworkData.forEach(hw => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.textContent = `${hw.subject}: ${hw.title}`;
        link.href = hw.link;
        link.target = "_blank"; // Opens in new tab
        listItem.appendChild(link);
        homeworkList.appendChild(listItem);
    });
});
