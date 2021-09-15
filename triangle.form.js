var quizForm = document.querySelector("#quiz-questions")
var checkBtn = document.querySelector("#check-score-btn")
var outputDiv = document.querySelector(".output")

const correctAnswer = ["90", "right triangle", "yes"]


function checkAnswers() {
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswer[index]) {
            score++
        }
        index++
    }
    outputDiv.innerText = "Your total score is " + score

}



checkBtn.addEventListener("click", checkAnswers)