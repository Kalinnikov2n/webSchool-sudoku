let Board = [
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

let mainSolve = function(Board) {
    const size = 9
    const blockSize = 3

    const findZero  = (Board) => {

        // ---  сюда функция, которая ищет пустые значения в доске
            
    }

    const valid = (num, pos, board) => {

        // --- сюда функцию, которая проверяет значения по строке, столбцу и сегменту в отдельности
            
    }
           
    const solve = () => {

        const currPos = findEmpty(board);

        if (currPos === null) {
        return true;
        }
        
        for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);
        
        if (isValid) {
        const [x,y] = currPos;
        board[x][y] = currNum;
        
        if(solve()) {
        return true;
        }
        
        board[x][y] = '0';
        }
        }
        
        return false;
    }

    solve()
    return Board
}

console.log(mainSolve(Board))