Step 2: Add Quizzes and Learning Materials 📚
Now, let's start adding quizzes! Here's what to do next:

Open script.js in GitHub.
Replace the current small code with this basic quiz system:
js
Copy
Edit
document.addEventListener("DOMContentLoaded", function() {
    let quiz = [
        { question: "What is 5 + 3?", answer: "8" },
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "How many planets are in the solar system?", answer: "8" }
    ];

    let quizContainer = document.createElement("div");
    quizContainer.innerHTML = "<h2>Quick Quiz</h2>";
    
    quiz.forEach((q, index) => {
        let qElement = document.createElement("p");
        qElement.textContent = q.question;
        
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "answer" + index);
        
        quizContainer.appendChild(qElement);
        quizContainer.appendChild(input);
    });

    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Answers";
    submitBtn.onclick = function() {
        quiz.forEach((q, index) => {
            let userAnswer = document.getElementById("answer" + index).value;
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                alert("Correct for question " + (index + 1));
            } else {
                alert("Wrong for question " + (index + 1) + ". The answer is " + q.answer);
            }
        });
    };
    
    quizContainer.appendChild(submitBtn);
    document.body.appendChild(quizContainer);
});
Click Commit changes to save it.
