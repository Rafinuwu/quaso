document.addEventListener("DOMContentLoaded", function() {
  var quizData = [
    {
      question: "Toi koi?",
      options: ["hoem", "dudu", "tomar moaan"],
      answer: "hoem",
    },
    {
      question: "Where did we first meet?",
      options: ["concert", "orientation", "dudu first day"],
      answer: "dudu first day",
    },
    {
      question: "What's my most fav memory of us?",
      options: ["juju", "gulshan datez", "uttara"],
      answer: "juju",
    },
  ];

  var quizForm = document.getElementById("quiz-form");
  var resultDiv = document.getElementById("result");
  var scoreSpan = document.getElementById("score");

  quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var score = 0;
    var inputs = quizForm.elements;

    for (var i = 0; i < quizData.length; i++) {
      var selectedAnswer = null;
      for (var j = 0; j < inputs.length; j++) {
        var input = inputs[j];
        if (input.name === q${i + 1} && input.checked) {
          selectedAnswer = input.value;
          break;
        }
      }
      if (selectedAnswer === quizData[i].answer) {
        score++;
      }
    }

    scoreSpan.innerText = score;
    resultDiv.style.display = "block";
  });
});
