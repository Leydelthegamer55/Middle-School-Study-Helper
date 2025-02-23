function showQuiz() {
    document.getElementById("homeworkSection").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    let quizQuestions = [
        { question: "What is 5 + 3?", answer: "8" },
        { question: "Who discovered gravity?", answer: "Newton" },
        { question: "What is the capital of France?", answer: "Paris" }
    ];

    let quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = "";

    quizQuestions.forEach((q, index) => {
        let questionText = document.createElement("p");
        questionText.textContent = q.question;

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "answer" + index);

        quizContainer.appendChild(questionText);
        quizContainer.appendChild(input);
    });

    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Answers";
    submitBtn.onclick = function() {
        quizQuestions.forEach((q, index) => {
            let userAnswer = document.getElementById("answer" + index).value;
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                alert("Correct for question " + (index + 1));
            } else {
                alert("Wrong for question " + (index + 1) + ". The answer is " + q.answer);
            }
        });
    };

    quizContainer.appendChild(submitBtn);
});
