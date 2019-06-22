// Global Variables
const gameTable = document.querySelector('#game-table');
const boxes = document.querySelectorAll('.box');
let player1Boxes = [];
let player2Boxes = [];

let player1 = true;

let score = {};
const winningComobos = {
  combo1: [boxes[0], boxes[1], boxes[2]],
  combo2: [boxes[3], boxes[4], boxes[5]],
  combo3: [boxes[6], boxes[7], boxes[8]],
  combo4: [boxes[0], boxes[3], boxes[6]],
  combo5: [boxes[1], boxes[4], boxes[7]],
  combo6: [boxes[2], boxes[5], boxes[8]],
  combo7: [boxes[0], boxes[4], boxes[8]],
  combo8: [boxes[2], boxes[4], boxes[6]]
};

const initGame = () => {
  for (box of boxes) {
    box.textContent = '';
    box.classList.remove('taken');
  }

  score.player1 = 0;
  score.player2 = 0;
};

gameTable.addEventListener('click', e => {
  // Find match
  for (box of boxes) {
    if (e.target === box && !box.classList.contains('taken')) {
      if (player1) {
        box.textContent = 'X';
        player1Boxes.push(box);
        box.classList.add('taken');
        player1 = false;
      } else {
        box.textContent = 'O';
        player2Boxes.push(box);
        box.classList.add('taken');
        player1 = true;
      }
    }
  }
});

const checkCombos = () => {
  player1Boxes.sort();
};

initGame();
