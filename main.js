const questionDisplay = document.querySelector("#Question");
const optionsDisplay = document.querySelectorAll(".options");
const button = document.querySelector("#button");

let Questions = [
  {
    Question: "How many planets are there ?",
    options: ["9", "10", "19", "20"],
    Answer: "9",
  },
  {
    Question: "How many continents are there ?",
    options: ["6", "10", "7", "20"],
    Answer: "7",
  },
  {
    Question: "How many states are in Nigeria ?",
    options: ["87", "56", "36", "20"],
    Answer: "36",
  },
  {
    Question: "How many moons does the earth have ?",
    options: ["5", "6", "1", "9"],
    Answer: "1",
  },
  {
    Question: "How old is Bukunmi?",
    options: ["17", "19", "20", "15"],
    Answer: "15",
  },
  {
    Question: "How old is sile ?",
    options: ["6", "4", "9", "20"],
    Answer: "9",
  },
];
let LastRendered = {};
function getQuestion(num) {
  let QuestionsToAsk = Questions[randomNumber(num)];
  while (LastRendered == QuestionsToAsk) {
    console.log("i just got rendered");
    QuestionsToAsk = Questions[randomNumber(num)];
  }
  LastRendered = QuestionsToAsk;
  return QuestionsToAsk;
}
function randomNumber(num) {
  let number = Math.floor(Math.random() * num);
  return number;
}
function RenderQuestions() {
  const questionToAsk = getQuestion(Questions.length);
  questionDisplay.textContent = questionToAsk.Question;
  for (let i = 0; i < questionToAsk.options.length; i++) {
    optionsDisplay[i].textContent = questionToAsk.options[i];
    optionsDisplay[i].style.backgroundColor = "white";
  }

  optionsDisplay.forEach((span) => {
    span.addEventListener("click", (e) => {
      if (questionToAsk.Answer == e.target.textContent) {
        span.classList.add("right");
        span.style.backgroundColor = "green";
      } else {
        span.classList.add("wrong");
        span.style.backgroundColor = "red";
      }
    });
  });
}
RenderQuestions();
button.addEventListener("click", RenderQuestions);
