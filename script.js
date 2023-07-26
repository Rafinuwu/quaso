var quizData = [
    {
        question: "Toi koi?",
        options: ["hoem", "dudu", "tomar moaan"],
        answer: "hoem"
    },
    {
        question: "Where did we first meet?",
        options: ["concert", "orientation", "dudu first day"],
        answer: "dudu first day"
    },
    {
        question: "What's my most fav memory of us?",
        options: ["juju", "gulshan datez", "uttara"],
        answer: "juju"
    }
];

var quizForm = document.getElementById("quiz-form");
var resultDiv = document.getElementById("result");
var scoreSpan = document.getElementById("score");

quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    var userAnswers = new FormData(quizForm);

    quizData.forEach((question, index) => {
        var selectedAnswer = userAnswers.get(q${index + 1});
        if (selectedAnswer === question.answer) {
            score++;
        }
    });

    scoreSpan.innerText = score;
    resultDiv.style.display = "block";
});
