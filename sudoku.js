// здесь написала кое-какие правила проверки тоже.
// поняла, что нужно написать в принципе для всех судоку вроде.
// вот эту штуку уже нужно оформлять в html, то есть она не в консоли

const x = null;

const board1 = [
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
]

const board2 = [
    [1, 7, 9, x, x, x, x, 4, 3],
    [x, 6, x, x, x, x, x, 2, 1],
    [4, x, 2, x, x, 1, 9, 8, x],
    [6, x, 7, x, x, x, x, 1, x],
    [5, x, x, x, 1, 2, 3, 9, x],
    [3, x, 1, 4, 9, 7, x, x, x],
    [9, x, x, 3, x, 5, x, 7, 4],
    [x, x, x, x, x, x, 1, x, x],
    [x, x, x, x, x, x, x, 5, 8],
]

const board3 = [
    [1, x, x, x, x, x, x, x, x],
    [2, x, x, x, x, x, x, x, x],
    [3, x, x, x, x, x, x, x, x],
    [4, x, x, x, x, x, x, x, x],
    [5, x, x, x, x, x, x, x, x],
    [6, x, x, x, x, x, x, x, x],
    [7, x, x, x, x, x, x, x, x],
    [8, x, x, x, x, x, x, x, x],
    [x, 2, 3, 4, 5, 6, 7, 8, 9],
]

function solve(board){
    if (solved(board)){
        return board;
    } else {
        const possible = nextBoards(boards);
        const validBoards = keepValid(possible);
        return searchForSolution(validBoards);
    }
}

function searchForSolution(boards){
    if (boards.length < 1){
        return false
    } else {
        var first = boards.shift()
        const tryPath = solve(first)
        if (tryPath != false){
            return tryPath
        } else {
            return searchForSolution(boards)
        }
    }
}

function solved(board){
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board [i][j] === null){
                return false
            }
        }
    }
    return true
}

function nextBoards(board){
    var res = []
    const firstEmpty = findEmptyBox(board)
    if (firstEmpty != undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 1; i <= 9; i++){
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptyBox(board){
    for (var i = 0; i<9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null){
                return [i,j]
            }
        }
    }
}

function keepValid(boards){
    return boards.filter(x => validBoard(x))
}

function validBoard(board){
    return rowFine(board) && columnFine(board) && squaresFine(board)
}

function rowFine(board){
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[i][j])){
                return false
            } else if (board[i][j] != null){
                cur.push(board[i][j])
            }
        }
    }
    return true
}

function columnFine(board){
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[j][i])){
                return false
            } else if (board[j][i] != null){
                cur.push(board[j][i])
            }
        }
    }
    return true
}

function squaresFine(board){
    const squareCordinates = [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2]
    ]

    for (var y = 0; y < 9; y+=3){
        for (var x = 0; x < 9; x+=3){
            var cur = []
            for (var i = 0; x < 9; x += 3){
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(board[coordinates[0]][coordinates[1]])){
                    return false
                }
                else if (board[coordinates[0]][coordinates[1]] != null){
                    cur.push(board[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}
console.log(solved(board1))