// const button = document.querySelector(".btn");
// let playerSelection;
// let computerResult;
// const para = document.createElement("p");
// function playerChoice() {
//   if (button == "Rock") playerSelection = "Rock";

//   if (button == "Paper") playerSelection = "Paper";

//   if (button == "Scissor") playerSelection = "Scissor";
//   return playerSelection;
// }

// function computerSelection() {
//   let getComputerChoice = Math.floor(Math.random() * 3);

//   if (getComputerChoice === 0) computerResult = "Rock";
//   else if (getComputerChoice === 1) computerResult = "Scissor";
//   else computerResult = "Paper";

//   return computerResult;
// }
// button.addEventListener("click", () =>
//   playGround(computerSelection, playerChoice)
// );
// function playGround(computerSelection, playerChoice) {
//   if (computerResult == "Rock") {
//     if (playerSelection == "Paper") {
//       para.textContent = "You win! Paper covers Rock";
//     } else if (playerSelection == "scissor") {
//       para.textContent = "You loss! scissor is crushed by Rock";
//     } else {
//       para.textContent = "No winner! paly again";
//     }
//   } else if (computerResult == "Paper") {
//     if (playerSelection == "Rock") {
//       para.textContent = " You loss ! Rock is covered by paper";
//     } else if (playerSelection == "scissor") {
//       para.textContent = "You win! scissor cuts paper";
//     } else {
//       para.textContent = "No winner! paly again";
//     }
//   } else {
//     if (playerSelection == "Paper") {
//       para.textContent = "You loss! scissor cuts paper";
//     } else if (playerSelection == "Rock") {
//       para.textContent = "You win! Rock crushes the scissor";
//     } else {
//       para.textContent = "No winner! paly again";
//     }
//   }
// }

let computerResult;
let playerSelection;
const para = document.createElement("p");

function computerSelection() {
  let getComputerChoice = Math.floor(Math.random() * 3);

  if (getComputerChoice === 0) computerResult = "Rock";

  if (getComputerChoice === 1) computerResult = "Scissor";

  return computerResult;
}

// playerSelection = prompt("enter your defender choice", "Rock");
for (let i = 0; i <= 1; i++) {
  playerSelection = prompt("enter your defender choice", "Rock");
  console.log(playGround(computerSelection, playerSelection));
}
if (computerSelection() == playerSelection) {
  playGround(computerSelection, playerSelection);
}
function playGround(computerSelection, playerSelection) {
  if (computerSelection() == "Rock") {
    if (playerSelection == "Paper") {
      return "You win! Paper covers Rock";
    } else if (playerSelection == "scissor") {
      return "You loss! scissor is crushed by Rock.";
    } else if (playerSelection == "rock") {
      return "No winner! paly again. both are rock";
    } else {
      return "you insert un acceptable value, please insert the correct one inside rock";
    }
  } else if (computerSelection() == "Paper") {
    if (playerSelection == "Rock") {
      return "No winner! paly again";
    } else if (playerSelection == "scissor") {
      return "You win! scissor cuts paper";
    } else if (playerSelection == "paper") {
      return "No winner! paly again ,both are paper ";
    } else {
      return "you insert un acceptable value, please insert the correct one inside paper";
    }
  } else if (computerSelection == "scissor") {
    if (playerSelection == "Paper") {
      return "You loss! scissor cuts paper";
    } else if (playerSelection == "Rock") {
      return "You win! Rock crushes the scissor";
    } else if (playerSelection == "scissor") {
      return "No winner! paly again, both are scissor";
    } else {
      return "you insert unacceptable value, please insert the correct one inside scissor";
    }
  } else {
    return "the computer is not responding  , please try again!";
  }
}
