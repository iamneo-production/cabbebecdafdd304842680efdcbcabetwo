// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result'); 
let btns = document.querySelectorAll('.btn');
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle player moves  
const ticTacToe = (element, index) => {

  // Check for empty cell
  if(cells[index] !== '') return;

  // Update cell
  cells[index] = currentPlayer;
  element.value = currentPlayer;

  // Check for win
  for(let condition of conditions) {
    let [a, b, c] = condition;
    if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      result.innerText = `Player ${currentPlayer} wins!`;
      btns.forEach(btn => btn.disabled = true);
      return;
    }
  }

  // Check for draw
  if(!cells.includes('')) {
    result.innerText = 'Game Draw!';
    btns.forEach(btn => btn.disabled = true);
    return; 
  }

  // Switch player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Update result
  result.innerText = `Player ${currentPlayer}'s turn`;
};


// Function to reset game
const resetGame = () => {
  cells.fill('');
  currentPlayer = 'X';
  btns.forEach(btn => {
    btn.disabled = false;
    btn.value = '';
  });
  result.innerText = `Player ${currentPlayer}'s turn`; 
}

// Event listeners
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);