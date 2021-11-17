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
        const [r, c] = pos
         
        for (let i = 0; i < size; i++) {
            if (board[i][c] === num && i !== r) {
                return false
            }
        }
        
        for (let i = 0; i < size; i++) {
          if (board[r][i] === num && i !== c) {
              return false
          }
      } 

       const boxCol = Math.floor( c/boxSize ) * boxSize
       const boxRow = Math.floor( r/boxSize ) * boxSize
       
       for (let i = boxRow; i < boxRow + boxSize; i++){
           for ( let j = boxCol; j <boxCol + boxSize; j++){
              if (board[i][j] === num && i !== r && j !== c) {
                  return false
           }
       }

       return true
      }
      }
           
    const solve = () => {

        // --- сюда функцию, которая решает, какое значение подставить (через рекурсию)
    
    }

    solve()
    return Board
}

console.log(mainSolve(Board))