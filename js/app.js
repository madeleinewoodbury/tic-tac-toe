// Global Variables
const replay = document.querySelector('.fa-redo-alt');
const gameTable = document.querySelector('#game-table');
const boxes = document.querySelectorAll('.box');
let player1Boxes = [];
let player2Boxes = [];
let test = true;
let gameOver = false;

const player1 = {
  txt: 'X',
  boxes: [],
  isPlaying: true,
  hasWon: false
};

const player2 = {
  txt: 'O',
  boxes: [],
  isPlaying: false,
  hasWon: false
};

// Winning combos
const combo1 = [boxes[0], boxes[1], boxes[2]];
const combo2 = [boxes[3], boxes[4], boxes[5]];
const combo3 = [boxes[6], boxes[7], boxes[8]];
const combo4 = [boxes[0], boxes[3], boxes[6]];
const combo5 = [boxes[1], boxes[4], boxes[7]];
const combo6 = [boxes[2], boxes[5], boxes[8]];
const combo7 = [boxes[0], boxes[4], boxes[8]];
const combo8 = [boxes[2], boxes[4], boxes[6]];

let winningCombo = [];

gameTable.addEventListener('click', e => {
  if (!gameOver) {
    // Find match
    for (box of boxes) {
      if (e.target === box && !box.classList.contains('taken')) {
        if (player1.isPlaying) {
          updateGame(player1, box);
          player2.isPlaying = true;
        } else {
          updateGame(player2, box);
          player1.isPlaying = true;
        }
      }
    }
  }
});

const updateGame = (player, box) => {
  box.textContent = player.txt;
  player.boxes.push(box);
  box.classList.add('taken');

  if (player.boxes.length >= 3) {
    if (checkCombos(player.boxes)) {
      player.hasWon = true;
      playerWins();
    }
  }

  player.isPlaying = false;
};

const playerWins = () => {
  gameOver = true;
  for (let box of winningCombo) {
    box.classList.add('win');
  }
};

const checkCombos = arr => {
  if (checkCombo(arr, combo1)) return true;
  if (checkCombo(arr, combo2)) return true;
  if (checkCombo(arr, combo3)) return true;
  if (checkCombo(arr, combo4)) return true;
  if (checkCombo(arr, combo5)) return true;
  if (checkCombo(arr, combo6)) return true;
  if (checkCombo(arr, combo7)) return true;
  if (checkCombo(arr, combo8)) return true;

  return false;
};

const checkCombo = (arr, combo) => {
  let count = 0;
  combo.forEach(item => {
    if (arr.includes(item)) {
      count += 1;
    }
  });

  if (count >= 3) {
    // winningCombo.push(combo);
    combo.forEach(item => {
      winningCombo.push(item);
    });

    return true;
  }

  return false;
};

replay.addEventListener('click', e => {
  window.location.reload(true);
});
