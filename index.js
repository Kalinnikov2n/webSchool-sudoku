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

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c ++) {
                if (Board [r][c] === 0) {
                    return [r,c];
                }
            }
        }
        return null
    }
            

    const valid = (num, pos, Board) => {
        const [r, c] = pos
         
        for (let i = 0; i < size; i++) {
            if (Board[i][c] === num && i !== r) {
                return false
            }
        }
        
        for (let i = 0; i < size; i++) {
          if (Board[r][i] === num && i !== c) {
              return false
          }
      } 

       const blockCol = Math.floor( c/blockSize ) * blockSize
       const blockRow = Math.floor( r/blockSize ) * blockSize
       
       for (let i = blockRow; i < blockRow + blockSize; i++){
           for ( let j = blockCol; j <blockCol + blockSize; j++){
              if (Board[i][j] === num && i !== r && j !== c) {
                  return false
           }
       }

       return true
      }
      }
           
    const solve = () => {

        const currPos = findZero(Board)

        if (currPos === null) {
        return true;
        }
        
        for (let i = 1; i < size + 1; i++) {
            const currNum = i
            const isValid = valid(currNum, currPos, Board)
            
            if (isValid) {
            const [x,y] = currPos
            Board[x][y] = currNum
        
            if(solve()) {
                return true;
        }
        
            Board[x][y] = 0
        }
    }
        
        return false;
}
    solve()
    return Board
}

console.log(mainSolve(Board))