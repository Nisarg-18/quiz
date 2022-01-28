const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheeps",
    b: "Cascading Super Sheets",
    c: "Cascading Style Sheets",
    d: "Cascading Sheep Sheets",
    ans: "ans3",
  },
  {
    question: "Q3: What is the full form of JS?",
    a: "JavaSheet",
    b: "JavaStyle",
    c: "JavaScript",
    d: "JavaSheep",
    ans: "ans3",
  },
  {
    question: "Q4: What is the full form of EOD?",
    a: "End Of Day",
    b: "Easy Orange Dance",
    c: "Eat Olive Daily",
    d: "End Of Decade",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
let questionCount = 0;
const showScore = document.querySelector("#marks");
let score = 0;
const load = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  opt1.innerText = questionList.a;
  opt2.innerText = questionList.b;
  opt3.innerText = questionList.c;
  opt4.innerText = questionList.d;
};

load();

const check = () => {
  let answer;
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  });
  return answer;
};

const deselect = () => {
  answers.forEach((currentAns) => (currentAns.checked = false));
};

submit.addEventListener("click", () => {
  const checkAnswer = check();
  console.log(checkAnswer);

  if (checkAnswer == quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselect();

  if (questionCount < quizDB.length) {
    load();
  } else {
    showScore.innerHTML = `
        <h3>Your Score: ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again!</button>

        `;

    showScore.classList.remove("score");
  }
});
