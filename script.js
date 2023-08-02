let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];
let gameOver = false;

const gameStatus = document.querySelector("#status")

function makeMove(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;

    if (checkWin()) {
      gameStatus.textContent = `Player ${currentPlayer} wins!`;
      gameOver = true;
      gameStatus.setAttribute("class", "winner")
    } else if (board.every(cell => cell !== "")) {
        gameStatus.textContent = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      gameStatus.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    gameStatus.removeAttribute("class")
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    gameStatus.textContent = "Player X's turn";
  }
