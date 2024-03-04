const inputEl = document.querySelector("#input");
const formEl = document.querySelector("#form");
const questionEl = document.querySelector("#question");
const scoreEl = document.querySelector("#score");

let rnNumberOne;
let rnNumberTwo;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0
}

scoreEl.innerHTML = `Score:${score}`;

function randomNumber() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  questionEl.innerHTML = `What is ${num1} multiplied by ${num2}`;
}

function calculateScore() {
  let userAns = +inputEl.value;
  let correctAns = num1 * num2;

  if (userAns === correctAns) {
    score++;
    console.log(score);
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
}

function updateLocalStorage() {
  return localStorage.setItem("score", JSON.stringify(score));
}

formEl.addEventListener("submit", () => {
  if (inputEl.value === "") {
    alert("Input can not be empty");
  } else {
    calculateScore();
    randomNumber();
  }
});

randomNumber();
