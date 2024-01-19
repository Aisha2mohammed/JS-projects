let computerResult;
let playerSelection;
const para = document.createElement("p");

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

for (let i = 0; i <= 1; i++) {
  playerSelection = prompt("enter your defender choice", "Rock");

  game();
}

function game() {
  if (computerSelectionResult.toLowerCase() === playerSelection.toLowerCase()) {
    playerSelection = prompt("can you insert your choice again", "Rock");
    console.log("The tie occur , can you please try again !");
    console.log(playGround(computerSelectionResult, playerSelection));
  } else {
    console.log(playGround(computerSelectionResult, playerSelection));
  }
}

function playGround(computerSelectionResult, playerSelection) {
  if (computerSelectionResult.toLowerCase() === "Rock") {
    if (playerSelection.toLowerCase() === "paper") {
      return (para.textContent = "You win! Paper covers Rock");
    } else if (playerSelection.toLowerCase() === "scissor") {
      return (para.textContent = "You loss! scissor is crushed by Rock.");
    } else if (playerSelection.toLowerCase() === "rock") {
      return (para.textContent = "No winner! paly again. both are rock");
    } else {
      return (para.textContent =
        "you insert WRONG value, please insert the correct one ");
    }
  } else if (computerSelectionResult.toLowerCase() === "paper") {
    if (playerSelection.toLowerCase() === "scissor") {
      return (para.textContent = "You win! scissor cuts paper");
    } else if (playerSelection.toLowerCase() === "rock") {
      return (para.textContent = "You loss! Rock is covered by paper.");
    } else if (playerSelection.toLowerCase() === "paper") {
      return (para.textContent = "No winner! paly again. both are paper");
    } else {
      return (para.textContent =
        "you insert WRONG value, please insert the correct one ");
    }
  } else if (computerSelectionResult.toLowerCase() === "scissor") {
    if (playerSelection.toLowerCase() === "rock") {
      return (para.textContent = "You win! rock crushes the scissor ");
    } else if (playerSelection.toLowerCase() === "paper") {
      return (para.textContent = "You loss!paper is cut off by scissor.");
    } else if (playerSelection.toLowerCase() === "scissor") {
      return (para.textContent = "No winner! paly again. both are scissor");
    } else {
      return (para.textContent =
        "you insert WRONG value, please insert the correct one ");
    }
  } else {
    return (para.textContent = "something went wrong  ,please try again! ");
  }
}
