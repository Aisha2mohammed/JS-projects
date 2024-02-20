let computerResult;
let playerSelection;
let playerCount;
let computerCount;
let count1 = 0;
let count2 = 0;
let roundCount = 0;

const span2 = document.querySelector(".span2");
const span1 = document.querySelector(".span1");
const para = document.querySelector(".content");
const p1 = document.querySelector(".content-1");
const p2 = document.querySelector(".content-2");
const btn = document.querySelector("button");
const buttons = document.querySelectorAll("button");
const pCon = document.querySelectorAll("p");
const div = document.querySelector("div");
const buttonContent = document.querySelector(".btn-content2");
const comSelect = document.createElement("p");
const playerSelect = document.createElement("p");

const smallDiv1 = document.querySelector("small-div1");
const smallDiv2 = document.querySelector("small-div2");

function computerSelection() {
  let getComputerChoice = Math.floor(Math.random() * 3);

  if (getComputerChoice === 0) {
    computerResult = "Rock";
  } else if (getComputerChoice === 1) {
    computerResult = "Scissor";
  } else {
    computerResult = "Paper";
  }
  return computerResult;
}
let computerSelectionResult = computerSelection();

buttons.forEach(game);
function game(btn) {
  btn.addEventListener("click", function handle(event) {
    roundCount++;
    setPlay(event.target.value);
  });
}
function setPlay(playerSelection) {
  if (roundCount <= 5) {
    playRound(computerSelectionResult, playerSelection);
  } else {
    const finishes = document.createElement("p");
    const winner = document.createElement("p");
    const playAgainButton = document.createElement("button");
    winner.setAttribute("class", "winner");
    finishes.setAttribute("class", "finish");

    para.textContent = "";

    if (count1 > count2)
      winner.textContent = `Congratulation! You are the winner.`;
    else if (count1 < count2)
      winner.textContent = `You loss. Try again to be the winner.`;
    else winner.textContent = `No winner! Try again.`;
    finishes.textContent = " Game Over!";
    playAgainButton.textContent = "Play again";
    playAgainButton.setAttribute("class", "play-button");
    playAgainButton.style.cssText =
      "background-color: rgb(239, 232, 187); color:rgb(98, 117, 98); border:none; padding:9px; border-radius:6px; font-size:15px;";

    div.appendChild(finishes);
    div.appendChild(winner);
    div.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", function () {
      span1.textContent = "";
      span2.textContent = "";
      p1.textContent = "";
      p2.textContent = "";
      count1 = 0;
      count2 = 0;
      finishes.textContent = "";
      winner.textContent = "";
      playAgainButton.textContent = "";
      playAgainButton.remove();
      playAgainButton.style.cssText = "";
      roundCount = "";
    });
    // btn.removeEventListener("click", handle);
  }
  function playRound(computerSelectionResult, playerSelection) {
    comSelect.textContent = `Computer select :${computerSelectionResult.toUpperCase()}`;
    playerSelect.textContent = `You select : ${playerSelection.toUpperCase()}`;
    buttonContent.appendChild(playerSelect);
    buttonContent.appendChild(comSelect);

    span1.textContent = `${count1}`;
    span2.textContent = `${count2}`;
    p1.textContent = `You : `;
    p2.textContent = `computer : `;
    para.textContent = "";

    if (computerSelectionResult === "Rock") {
      if (playerSelection.toLowerCase() === "paper") {
        para.textContent = "You win! Paper covers Rock";
      } else if (playerSelection.toLowerCase() === "scissor") {
        para.textContent = "You loss! scissor is crushed by Rock.";
      } else if (playerSelection.toLowerCase() === "rock") {
        para.textContent = "A tie! paly again. both are rock";
      } else {
        para.textContent =
          "you insert WRONG value, please insert the correct one ";
      }
    }

    if (computerSelectionResult === "Paper") {
      if (playerSelection.toLowerCase() === "scissor") {
        para.textContent = "You win! scissor cuts paper";
      } else if (playerSelection.toLowerCase() === "rock") {
        para.textContent = "You loss! Rock is covered by paper.";
      } else if (playerSelection.toLowerCase() === "paper") {
        para.textContent = "A tie! paly again. both are paper";
      } else {
        para.textContent =
          "you insert WRONG value, please insert the correct one ";
      }
    }
    if (computerSelectionResult === "Scissor") {
      if (playerSelection.toLowerCase() === "rock") {
        para.textContent = "You win! rock crushes the scissor ";
      } else if (playerSelection.toLowerCase() === "paper") {
        para.textContent = "You loss!paper is cut off by scissor.";
      } else if (playerSelection.toLowerCase() === "scissor") {
        para.textContent = "A tie! play again. both are scissor";
      } else {
        para.textContent =
          "you insert WRONG value, please insert the correct one ";
      }
    }

    if (
      para.textContent === "You win! rock crushes the scissor " ||
      para.textContent === "You win! scissor cuts paper" ||
      para.textContent === "You win! Paper covers Rock"
    ) {
      count1++;
      span1.textContent = `${count1}`;
    }
    if (
      para.textContent === "You loss! scissor is crushed by Rock." ||
      para.textContent === "You loss! Rock is covered by paper." ||
      para.textContent === "You loss!paper is cut off by scissor."
    ) {
      count2++;
      span2.textContent = `${count2}`;
    }
    // if (
    //   para.textContent === "A tie! play again. both are scissor" ||
    //   para.textContent === "A tie! paly again. both are paper" ||
    //   para.textContent === "A tie! paly again. both are rock"
    // ) {
    //   count1 = 0;
    //   count2 = 0;

    //   span1.textContent = `${count1}`;
    //   span2.textContent = `${count2}`;
    // }
    pCon.textContent = `You select : ${computerSelectionResult.toUpperCase()}`;
    pCon.textContent = `Computer select : ${computerSelectionResult.toUpperCase()}`;
    // div.appendChild(para);
  }
}
