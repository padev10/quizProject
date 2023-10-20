// Exercise 1: Array Basics
// Create an array that contains the numbers from 1 to 10. Perform the following operations:

const zform = document.querySelector(".q-form");
const divBox = document.querySelectorAll(".qts");
const score_msg = document.querySelector(".score-msg");
const showBox = document.querySelector(".div-txt");
const tryAgain = document.querySelector(".t-again");

//we gon compare the userSelection to anb array of true resuts

const correctAnswers = [
  "Au",
  "William Shakespeare",
  "Japan",
  "1492",
  "3.14",
  "IBM",
  "Albert Einstein",
  "Parasite",
  "Michael Jackson",
  "Canberra",
];

zform.addEventListener("submit", (event) => {
  event.preventDefault();
  //receiving answer in an array
  const answers = [
    zform.q1.value,
    zform.q2.value,
    zform.q3.value,
    zform.q4.value,
    zform.q5.value,
    zform.q6.value,
    zform.q7.value,
    zform.q8.value,
    zform.q9.value,
    zform.q10.value,
  ];
  let score = 0;
  //console.log(answers);
  //compare arrays
  answers.forEach((awr, index) => {
    // condition
    if (awr === correctAnswers[index]) {
      //increase score
      score += 1;
      // add the green class to the correct div's answer
      divBox[index].classList.add("green");
    } else {
      // add the red class to the incorrect div's answer
      divBox[index].classList.add("red");
    }
    //update score message text
    showBox.style.display = "flex";
    score_msg.innerHTML = `Your score is <span class='s-results'>${score}/10</span>`;
    //condition
    if (score === 10) tryAgain.textContent = "Well Done";
    //reload when trying again
    tryAgain.addEventListener("click", reloadPage);
  });
});

function reloadPage() {
  location.reload();
}
