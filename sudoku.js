let board = [
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

let solve = (board) => {
    let empty_spot = find_empty_spot(board)
    let row = empty_spot[0]
    let column = empty_spot[1]

    if (row === -1) {
        return board
    }

    for (let i = 1; i <= 9; i++) {
        if (check_row(board, row, i) && check_square(board, row, column, i) && check_column(board, column, i)) {
            board[row][column] = i
            solve(board)
        }
    }

    if (find_empty_spot(board)[0] !== -1) {
        board[row][column] = 0
    }

    return board
}

let check_row = (board, row, num) => {
    for (let i = 0; i < board[row].length; i++) {
        if (board[row][i] === num) {
            return false
        }
    }
    return true
}

let check_column = (board, column, num) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i][column] === num) {
            return false            
        }
    }
    return true
}

let check_square = (board, row, column, num) => {
    
    start_point_x = Math.floor(row / 3) * 3
    start_point_y = Math.floor(column / 3) * 3

    for (let i = 0; i < 3 ; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[start_point_x + i][start_point_y + j] === num) {
                return false
            }
        }
    }
    return true
}

let find_empty_spot = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                return([i, j])
            }    
        }
    }

    return([-1, -1])
}

console.log(solve(board)); 