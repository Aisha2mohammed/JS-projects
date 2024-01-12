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
  else if (getComputerChoice === 1) computerResult = "Scissor";
  else computerResult = "Paper";

  return computerResult;
}
let computerSelectionResult = computerSelection();

for (let i = 0; i <= 1; i++) {
  playerSelection = prompt("enter your defender choice", "Rock");

  game();
}

function game() {
  if (computerSelectionResult == playerSelection) {
    playerSelection = prompt("can you insert your choice again", "Rock");

    console.log(playGround(computerSelection, playerSelection));
  }
  return playGround(computerSelection, playerSelection);
}
function playGround(computerSelectionResult, playerSelection) {
  if (computerSelectionResult == "Rock") {
    if (playerSelection == "Paper") {
      return (para.textContent = "You win! Paper covers Rock");
    } else if (playerSelection == "scissor") {
      return (para.textContent = "You loss! scissor is crushed by Rock.");
    } else if (playerSelection == "rock") {
      return (para.textContent = "No winner! paly again. both are rock");
    } else {
      return (para.textContent =
        "you insert un acceptable value, please insert the correct one inside rock");
    }
  } else if (computerSelectionResult == "Paper") {
    if (playerSelection == "Rock") {
      return (para.textContent = "No winner! paly again");
    } else if (playerSelection == "scissor") {
      return (para.textContent = "You win! scissor cuts paper");
    } else if (playerSelection == "paper") {
      return (para.textContent = "No winner! paly again ,both are paper ");
    } else {
      return (para.textContent =
        "you insert un acceptable value, please insert the correct one inside paper");
    }
  } else if (computerSelectionResult == "scissor") {
    if (playerSelection == "Paper") {
      return (para.textContent = "You loss! scissor cuts paper");
    } else if (playerSelection == "Rock") {
      return (para.textContent = "You win! Rock crushes the scissor");
    } else if (playerSelection == "scissor") {
      return (para.textContent = "No winner! paly again, both are scissor");
    } else {
      return (para.textContent =
        "you insert unacceptable value, please insert the correct one inside scissor");
    }
  }
  // } else {
  //   return (para.textContent =
  //     "the computer is not responding  , please try again!");
  // }
}
