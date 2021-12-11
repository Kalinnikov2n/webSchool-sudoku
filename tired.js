function run(field) {
    var [row, col] = findEmptyCell(field)
    // row = findEmptyCell(field)[0]
    // col = findEmptyCell(field)[1]

    if (row == -1 && col == -1) {
        return field
    }

    for (let i = 1; i <= 9; i++) {
        if (checkRow(field, row, i) && checkCol(field, col, i) && checkArea(field, row, col, i)) {
            field[row][col] = i
            run(field)
        }
    }
     
    if (findEmptyCell(field)[0] !== -1) {
        field[row][col] = 0
    }
    
    return field
}

function findEmptyCell(field)  {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (field[row][col] === 0) {
                return [row, col]
            }
        }
    }
    return [-1, -1]
}

function checkRow(field, row, val) {
    for (let i = 0; i < 9; i++) {
        // row = Number(row)
        try {
            if (field[row][i] === val) {
                return false
            }
        }
        catch (err) {
            console.log(row, val, field)
            console.log(err)
        }
    }
    return true
}

function checkCol(field, col, val) {
    for (let row = 0; row < 9; row++) {
        if (field[row][col] === val) {
            return false
        }
    }
    return true
}

function checkArea(field, row, col, val) {
    for (let i = 0; i < 9; i++) {
        let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let n = 3 * Math.floor(col / 3) + i % 3;
        if (field[m][n] === val) {
            return false
        }
    }
    return true
}

var game = [
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


console.table(run(game))