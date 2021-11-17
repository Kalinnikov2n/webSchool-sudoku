function run(field) {
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var [row, col] = findEmptyCell(field)

    if (row === col == -1) {
        
        return field
    }

    values.forEach( value => {
        // console.log(checkRow(field, row, value))
        // console.log(checkCol(field, col, value))
        // console.log(checkArea(field, row, col, value))
        if (checkRow(field, row, value) && checkCol(field, col, value) && checkArea(field, row, col, value)) {
            // я перестала понимать жизнь, он работает косячно
            field[row][col] = value
            run(field)
        }
    })
    console.log('я вернул поле при: ', row, col)
    return field
}

function findEmptyCell(field)  {
    for (row in field) {
        for (col in field[row]) {
            if (field[row][col] === 0) {
                return [row, col]
            }
        }
    }
    return [-1, -1]
}

function checkRow(field, row, val) {
    // field[row].forEach( element => {
    for (let i = 0; i < 9; i++) {
        if (field[row][i] === val) {
            return false
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

//Эта херня меня задолбала я не знаю как ещё проверить квадраты и углы
// ок нашла в инете

// function checkBorders(field, row, col, startRow, endRow, startCol, endCol) {
//     for (let i = startRow; i < endRow; i++) {
//         for (let j = startCol; j < endCol; j++) {
//             return (field[row + i][col + j])
//         }
//     }
// }

// function checkArea(field, row, col) {
    // switch (row | col) {
    //     case 0 | 0:
    //         // return checkBorders(field, row, col, 0, 2, 0, 2)
    //     case 8 | 0:
    //         // return checkBorders(field, row, col, -1, 1, 0, 2)
    //     case 0 | 8:
    //         // return checkBorders(field, row, col, 0, 2, -1, 1)
    //     case 8 | 8:
    //         // return checkBorders(field, row, col, -1, 1, -1, 1)
    //     case 0 | [1-9]:
    //         // return checkBorders(field,  row, col, 0, 2, -1, 2)
    //     case 8 | [1-9]:
    //         // return checkBorders(field, row, col, -1, 1, -1, 2)
    //     case [1-9] | 0:
    //         // return checkBorders(field, row, col, -1, 2, 0, 2)
    //     case [1-9] | 8:
    //         // return checkBorders(field, row, col, -1, 2, -1, 1)
    //     default:
    //         for (let i = -1; i < 2; i++) {
    //             for (let j = -1; j < 2; j++) {
    //                 return field[row + i][col + j]
    //             }
    //         }
    // } 
// }

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


console.log(run(game))