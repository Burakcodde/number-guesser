let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  let humanGap;
  let computerGap;

  if (humanGuess < targetNumber) {
    humanGap = targetNumber - humanGuess;
  } else {
    humanGap = humanGuess - targetNumber;
  }

  if (computerGuess < targetNumber) {
    computerGap = targetNumber - computerGuess;
  } else {
    computerGap = computerGuess - targetNumber;
  }

  if (humanGap > computerGap) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

console.log(generateTarget());
