class MinesweeperBot {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.board = [];
    this.visited = [];
  }

  initializeBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      this.visited[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.board[i][j] = '-';
        this.visited[i][j] = false;
      }
    }
  }

  placeMines(numMines) {
    // Not needed for the modified code
  }

  printBoard() {
    for (let i = 0; i < this.rows; i++) {
      let rowString = '';
      for (let j = 0; j < this.cols; j++) {
        rowString += this.board[i][j] + ' ';
      }
      console.log(rowString);
    }
  }

  playGame() {
    this.initializeBoard();
    this.expandAllSafeCells();

    console.log('Welcome to Minesweeper!');
    this.printBoard();
    console.log('Congratulations! You won the game.');
  }

  expandAllSafeCells() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] !== '-') continue;

        let numAdjacentMines = this.countAdjacentMines(i, j);
        this.board[i][j] = numAdjacentMines.toString();
      }
    }
  }

  countAdjacentMines(row, col) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let newRow = row + i;
        let newCol = col + j;

        if (
          newRow >= 0 &&
          newRow < this.rows &&
          newCol >= 0 &&
          newCol < this.cols &&
          this.board[newRow][newCol] === 'M'
        ) {
          count++;
        }
      }
    }

    return count;
  }
}

let minesweeperBot = new MinesweeperBot(8, 8); // Set the desired board size
minesweeperBot.playGame();
