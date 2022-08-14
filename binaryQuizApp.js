function decimalToBinary(number) {
  var binaryNumber = number.toString(2);
  return binaryNumber;
}

function questionType() {
  var questionType = Math.floor(Math.random() * 2);
  return questionType;
}

function randomNumber() {
  var number = Math.floor(Math.random() * 255) + 1;
  return number;
}

function randomOption1() {
  var randomOption1 = Math.floor(Math.random() * 255) + 1;
  return randomOption1;
}

function randomOption2() {
  var randomOption2 = Math.floor(Math.random() * 255) + 1;
  return randomOption2;
}

function randomOption3() {
  var randomOption3 = Math.floor(Math.random() * 255) + 1;
  return randomOption3;
}

function randomOption4() {
  var randomOption4 = Math.floor(Math.random() * 255) + 1;
  return randomOption4;
}

function randomCorrectPlace() {
  var randomCorrectPlace = Math.floor(Math.random() * 4) + 1;
  return randomCorrectPlace;
}

var questionNumber = 1;

var quizDB = new Array(10);
quizDB = [];

function quesType() {
  var number = randomNumber();
  if (questionType() == 0) {
    if (randomCorrectPlace() == 1) {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + number + " into Binary Number.",
        option1: decimalToBinary(number),
        option2: decimalToBinary(randomOption2()),
        option3: decimalToBinary(randomOption3()),
        option4: decimalToBinary(randomOption4()),
        ans: "answer1"
      });
    } else if (randomCorrectPlace() == 2) {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + number + " into Binary Number.",
        option1: decimalToBinary(randomOption1()),
        option2: decimalToBinary(number),
        option3: decimalToBinary(randomOption3()),
        option4: decimalToBinary(randomOption4()),
        ans: "answer2"
      });
    } else if (randomCorrectPlace() == 3) {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + number + " into Binary Number.",
        option1: decimalToBinary(randomOption1()),
        option2: decimalToBinary(randomOption2()),
        option3: decimalToBinary(number),
        option4: decimalToBinary(randomOption4()),
        ans: "answer3"
      });
    } else {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + number + " into Binary Number.",
        option1: decimalToBinary(randomOption1()),
        option2: decimalToBinary(randomOption2()),
        option3: decimalToBinary(randomOption3()),
        option4: decimalToBinary(number),
        ans: "answer4"
      });
    }



  } else {
    if (randomCorrectPlace() == 1) {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + decimalToBinary(number) + " into Decimal Number.",
        option1: number,
        option2: randomOption2(),
        option3: randomOption3(),
        option4: randomOption4(),
        ans: "answer1"
      });
    } else if (randomCorrectPlace() == 2) {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + decimalToBinary(number) + " into Decimal Number.",
        option1: randomOption1(),
        option2: number,
        option3: randomOption3(),
        option4: randomOption4(),
        ans: "answer2"
      });
    } else if (randomCorrectPlace() == 3) {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + decimalToBinary(number) + " into Decimal Number.",
        option1: randomOption1(),
        option2: randomOption2(),
        option3: number,
        option4: randomOption4(),
        ans: "answer3"
      });
    } else {
      quizDB.push({
        question: "Q" + questionNumber + ": Convert " + decimalToBinary(number) + " into Decimal Number.",
        option1: randomOption1(),
        option2: randomOption2(),
        option3: randomOption3(),
        option4: number,
        ans: "answer4"
      });
    }



  };

};

for (var i = 0; i < 10; i++) {
  quesType();
  questionNumber++;
}









const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
var score = 0;

const loadQuestion = () => {
  question.innerText = quizDB[questionCount].question;

  option1.innerText = quizDB[questionCount].option1;
  option2.innerText = quizDB[questionCount].option2;
  option3.innerText = quizDB[questionCount].option3;
  option4.innerText = quizDB[questionCount].option4;
}

loadQuestion();

var getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    /* ForEach loop checks for each element in the array. */
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
}

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener("click", function() {
  const checkedAnswer = getCheckAnswer();
  console.log("Checked Answer : " + checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
    console.log("Score Increased");
  };

  questionCount++;
  console.log("Questions : " + questionCount);
  console.log("Score : " + score);
  deselectAll();

  if (questionCount < 10) {

    loadQuestion();
  } else {

    showScore.innerHTML = `
    <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
    <button class="btn" onclick="location.reload()"> Play Again </button>
    `;

    showScore.classList.remove("scoreArea");

  }
});
