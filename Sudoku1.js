// не работает
// но она в консоли

var board = [
    [1, 7, 9, 0, 0, 0, 0, 4, 3],
    [0, 6, 0, 0, 0, 0, 0, 2, 1],
    [4, 0, 2, 0, 0, 1, 9, 8, 0],
    [6, 0, 7, 0, 0, 0, 0, 1, 0],
    [5, 0, 0, 0, 1, 2, 3, 9, 0],
    [3, 0, 1, 4, 9, 7, 0, 0, 0],
    [9, 0, 0, 3, 0, 5, 0, 7, 4],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 8],
]

function sudoku(board){
        var imPossible = {}, nonPossibilities, emptySpace = 81;
        while (emptySpace > 0){
            emptySpace = 0;
        for (var vert = 0; vert < board.length; vert++){
            for (var hor = 0; hor< board.length; hor++){
                if (board [vert][hor] === 0){
                    imPossible = {};
                    for (var i =0; i<9; i++){
                        if (board[vert][i] > 0);
                            imPossible[board[vert][i]] = true;
                        }
                        if (board[i][hor] > 0){
                            imPossible[board[i][hor]] = true;
                        }
                    }
                    for (var vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++) { 
                        for (var horBox = Math.floor(hor / 3) * 3; horBox < Math.floor(hor / 3) * 3 + 3; horBox++) {
                            if (board[vertBox][horBox]){
                                imPossible [board[vertBox][horBox]] = true;
                            }
                        }
                    }
                    nonPossibilities = Object.keys(imPossible);
                    if (nonPossibilities.length === 8){
                        for (var i = 1; i < 10; i++){
                            if (nonPossibilities.indexOf(i.toString()) < 0){
                                console.log(vert, hor);
                                board[vert][hor] = i;
                            }
                        }
                    } else {
                        emptySpace++;
                    }
                }
            }
        }
    }    
    return board;
