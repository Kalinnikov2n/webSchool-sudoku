function solve(board){
    var emptyField = findEmpty;
    var row = empty[0];
    var column = empty[1];

    // no empty fields
    if (row == -1) {
        return board;
    }

    for (var num = 1; num <= 9; num++) {
        if (noTrouble(board, row, column, num)){
            board[row][column] = num;
            solve(board);
        }
    }

    if (nextEmptySpot(board)[0] !== -1) {
        board[row][col] = 0;
    }
    return board;
}

function checkRow(board, row, num){
    for (var i = 0; i < board[row].length; i++){
        if (board[row][i] === num){
            return false;
        }
    } 
    return true
}

function checkColumn(board, column, num){
    for (var i = 0; i < board.length; i++){
        if (board[i][column] === num){
            return false;
        }
    } 
    return true
}

function checkBox(board, row, column, num){
    xBox = Math.floor(row / 3) * 3;
    yBox = Math.floor(column / 3) * 3;

    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (board[xBox + i][yBox + j] === num){
                return false;
            }                    
        }
    }
    return true;
}

function checkNum(board, row, column, num) {
    if (checkRow(board, row, num) &&
        checkColumn(board, column, num) &&
        checkBox(board, row, column, num)) {
            return true;
    }
    return false;
}

function findEmpty(board){
    for (var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if (board[i][j] === 0)
                return [i, j];
        }
    }
    return [-1, -1];
}

var solvedBoard = solve([
    [1, 7, 9, 0, 0, 0, 0, 4, 3],
    [0, 6, 0, 0, 0, 0, 0, 2, 1],
    [4, 0, 2, 0, 0, 1, 9, 8, 0],
    [6, 0, 7, 0, 0, 0, 0, 1, 0],
    [5, 0, 0, 0, 1, 2, 3, 9, 0],
    [3, 0, 1, 4, 9, 7, 0, 0, 0],
    [9, 0, 0, 3, 0, 5, 0, 7, 4],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 8],
])

console.log(solvedBoard);
