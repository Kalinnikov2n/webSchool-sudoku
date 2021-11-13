    //Поиск в строке (на вход подается судоку и номер строки, в которой надо найти уникальный элемент)

    const getSet = (a,b) => {
        let answer = []
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                answer.push(a[b][i][j])  //все элементы строки в один массив 
            }
        }
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента
        return answer
    }
    

    //Поиск в столбце (на вход подается судоку и номер столбца, в котором надо найти уникальный элемент)


    const getSetcolumn = (a,b) => {
        let answer = []
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                answer.push(a[i][b][j])  //все элементы столбца в один массив 
            }
        }
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента
        return answer
    }


//Поиск в 3x3 (на вход подается судоку, номер строки и столбца, откуда начинать поиск)

    
    const getSet3x3 = (a,n,k) => {
        let answer = []
        for (let i = n; i < n+3; i++){
              for (let j = 0; j < 9; j++){
                    answer.push(a[i][k][j])  //все элементы первого столбца в один массив 
                }
        }
        for (let i = n; i < n+3; i++){
            for (let j = 0; j < 9; j++){
                  answer.push(a[i][k+1][j])  //все элементы второго столбца в один массивe
              }
      }
      for (let i = n; i < n+3; i++){
        for (let j = 0; j < 9; j++){
              answer.push(a[i][k+2][j])  //все элементы третьего столбца в один массив 
          }
  }
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента
        return answer
    }
