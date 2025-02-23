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

// Default homework data with more subjects
let homeworkData = [
    // MATH
    { subject: "Math", title: "Algebra Basics", link: "https://www.khanacademy.org/math/algebra" },
    { subject: "Math", title: "Geometry Fundamentals", link: "https://www.khanacademy.org/math/geometry" },
    { subject: "Math", title: "Trigonometry Introduction", link: "https://www.mathsisfun.com/algebra/trigonometry.html" },

    // SCIENCE
    { subject: "Science", title: "Newton’s Laws of Motion", link: "https://www.khanacademy.org/science/physics" },
    { subject: "Science", title: "Introduction to Biology", link: "https://www.khanacademy.org/science/biology" },
    { subject: "Science", title: "Periodic Table of Elements", link: "https://www.chemicool.com/" },

    // ENGLISH
    { subject: "English", title: "Grammar and Writing", link: "https://www.grammarly.com/blog/grammar/" },
    { subject: "English", title: "How to Write Essays", link: "https://www.owl.purdue.edu/owl/general_writing/academic_writing/essay_writing.html" },
    { subject: "English", title: "Shakespeare Analysis", link: "https://www.sparknotes.com/shakespeare/" },

    // HISTORY
    { subject: "History", title: "World War II Overview", link: "https://www.history.com/topics/world-war-ii" },
    { subject: "History", title: "The American Revolution", link: "https://www.history.com/topics/american-revolution" },
    { subject: "History", title: "Ancient Egyptian Civilization", link: "https://www.nationalgeographic.com/history/article/ancient-egypt" },

    // GEOGRAPHY
    { subject: "Geography", title: "Countries and Capitals", link: "https://www.worldatlas.com/capitals" },
    { subject: "Geography", title: "Physical Geography Basics", link: "https://www.nationalgeographic.org/education/physical-geography/" },
    { subject: "Geography", title: "Map Reading Skills", link: "https://www.ordnancesurvey.co.uk/mapzone/map-skills" },

    // SPANISH
    { subject: "Spanish", title: "Basic Spanish Vocabulary", link: "https://www.duolingo.com/course/es/en/Learn-Spanish" },
    { subject: "Spanish", title: "Spanish Grammar Rules", link: "https://www.spanishdict.com/grammar" },
    { subject: "Spanish", title: "Spanish Verb Conjugation", link: "https://www.conjugation.com/spanish/" },

    // COMPUTER SCIENCE
    { subject: "Computer Science", title: "Learn JavaScript", link: "https://www.w3schools.com/js/" },
    { subject: "Computer Science", title: "Python Programming Basics", link: "https://www.python.org/about/gettingstarted/" },
    { subject: "Computer Science", title: "How the Internet Works", link: "https://www.khanacademy.org/computing/computer-science/internet-intro" },

    // ART
    { subject: "Art", title: "Famous Art Movements", link: "https://www.tate.org.uk/art/art-terms" },
    { subject: "Art", title: "How to Draw", link: "https://www.drawspace.com/" },
    { subject: "Art", title: "Introduction to Painting", link: "https://www.artistsnetwork.com/art-mediums/painting/" },

    // MUSIC
    { subject: "Music", title: "Music Theory Basics", link: "https://www.musictheory.net/" },
    { subject: "Music", title: "Learn to Read Sheet Music", link: "https://www.pianoscales.org/music-theory/reading-music.html" },
    { subject: "Music", title: "History of Classical Music", link: "https://www.classicfm.com/discover-music/periods-genres/classical/" }
];

function displayHomework() {
    let homeworkList = document.getElementById("homeworkList");
    homeworkList.innerHTML = ""; // Clear old list

    homeworkData.forEach(hw => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.textContent = `${hw.subject}: ${hw.title}`;
        link.href = hw.link;
        link.target = "_blank"; // Opens in a new tab
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
