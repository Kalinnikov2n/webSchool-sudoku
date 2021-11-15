let Sudoku = function (place) {
    let getPlace = place
    let abda = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            a = place[i][j]
            getPlace[i][j] = [0,0,0,0,0,0,0,0,0]
            getPlace[i][j][a-1] = a;
            if (a!= 0){
                getPlace[i][j].push("stable")
            } else{
                getPlace[i][j] = [1,2,3,4,5,6,7,8,9]
            }
        }
    }
    // place.forEach(element => {
    //     element.forEach(eme=>{
    //         console.log(eme)
    //     })
    // });
    let bloks = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ] // Массив из девяти блоков 3х3
    let stolbs = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++)
            bloks[0].push(place[j][k])
        for (let k = 3; k < 6; k++)
            bloks[1].push(place[j][k])
        for (let k = 6; k < 9; k++)
            bloks[2].push(place[j][k])
    }
    for (let j = 3; j < 6; j++) {
        for (let k = 0; k < 3; k++)
            bloks[3].push(place[j][k])
        for (let k = 3; k < 6; k++)
            bloks[4].push(place[j][k])
        for (let k = 6; k < 9; k++)
            bloks[5].push(place[j][k])
    }
    for (let j = 6; j < 9; j++) {
        for (let k = 0; k < 3; k++)
            bloks[6].push(place[j][k])
        for (let k = 3; k < 6; k++)
            bloks[7].push(place[j][k])
        for (let k = 6; k < 9; k++)
            bloks[8].push(place[j][k])
    }




   
       for(let j = 0;j<9;j++){
           for(let k = 0;k<9;k++){
               stolbs[j][k] = place[k][j]
           }
       }
   

    //Сейчас будет проверка строк на уникальные элемент

    const getSet = (a) => {
        let answer = []
        for (let str of a) {
            if (!answer.includes(str)) answer.push(str)
        }
        let array = a
        return (answer)
    }

    for (let i = 0; i < 9; i++) {
        getSet(place[i])
    }
    // console.log(bloks[1][8])
    // console.log(stolbs[0][0])
    return getPlace
}

//Поиск в строке (на вход подается судоку и номер строки, в которой надо найти уникальный элемент)

const getSetStr = (a,b) => {
    let answer = []
    for (let i = 0; i < 9; i++){
        if (a[b][i].length <= 9){
            for (let j = 0; j < 9; j++){
                answer.push(a[b][i][j])  //все элементы строки в один массив 
            }
        }
    }
//проверка есть ли элементы вида 0,0,3,0,0....
    let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
    let c = []                      //массив для вывода
    let h


    for (let i = 0; i < 9; i++){
        let q = 0
        if (a[b][i].length <= 9){
            for (let j = 0; j < 9; j++){
                if (a[b][i][j] == 0){
                    q += 1
                }
                else{
                    h = a[b][i][j]
                }
            }
            if (q==8){
                c[0] = b
                c[1] = i
                c[2] = h
                p += 1
                return c
            }
        }
    }

//если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
    answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
    if (p != 1) {
        for (let i = 0; i < 9; i++){
            if (a[b][i].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[b][i][j] == answer[0]){
                        c[0] = b
                        c[1] = i
                        c[2] = answer[0]
                        return c
                    }
                }
            }
        }
    }
    return "";
}


//Поиск в столбце (на вход подается судоку и номер столбца, в котором надо найти уникальный элемент)
//ВЫВОД В ФОРМАТЕ СТРОКА, СТОЛБЕЦ, ЭЛЕМЕНТ

const getSetcolumn = (a,b) => {
            let answer = []
    for (let i = 0; i < 9; i++){
        if (a[i][b].length <= 9){
            for (let j = 0; j < 9; j++){
                answer.push(a[i][b][j])  //все элементы столбца в один массив 
            }
        }
    }
//проверка есть ли элементы вида 0,0,3,0,0....
    let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
    let c = []                      //массив для вывода
    let h


    for (let i = 0; i < 9; i++){
        let q = 0
        if (a[i][b].length <= 9){
            for (let j = 0; j < 9; j++){
                if (a[i][b][j] == 0){
                    q += 1
                }
                else{
                    h = a[i][b][j]
                }
            }
            if (q==8){
                c[0] = i
                c[1] = b
                c[2] = h
                p += 1
                return c
            }
        }
    }
    //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
    answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
    if (p != 1) {
        for (let i = 0; i < 9; i++){
            if (a[i][b].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[i][b][j] == answer[0]){
                        c[0] = i
                        c[1] = b
                        c[2] = answer[0]
                        return c
                    }
                }
            }
        }
    }
    return ""
}

// //Поиск в 3x3 (на вход подается судоку, номер строки и столбца, откуда начинать поиск)


const getSet3x3 = (a,n,k) => {
    let answer = []
    for (let i = n; i < n+3; i++){
        if (a[i][k].length <= 9){
            for (let j = 0; j < 9; j++){
                answer.push(a[i][k][j])  //все элементы столбца в один массив 
            }
        }
    }
//проверка есть ли элементы вида 0,0,3,0,0....
    let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
    let c = []                      //массив для вывода
    c[0] = []
    c[1] = []
    c[2] = []
    let h


    for (let i = n; i < n+3; i++){
        let q = 0
        if (a[i][k].length <= 9){
            for (let j = 0; j < 9; j++){
                if (a[i][k][j] == 0){
                    q += 1
                }
                else{
                    h = a[i][k][j]
                }
            }
            if (q==8){
                c[0][0] = i
                c[0][1] = k
                c[0][2] = h
                p += 1
            }
        }
    }
    //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
    answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
    if (p != 1) {
        for (let i = n; i < n+3; i++){
            if (a[i][k].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[i][k][j] == answer[0]){
                        c[0][0] = i
                        c[0][1] = k
                        c[0][2] = answer[0]
                    }
                }
            }
        }
    }

//второй столбец матрицы 3 на 3    
    for (let i = n; i < n+3; i++){
        if (a[i][k].length <= 9){
            for (let j = 0; j < 9; j++){
                answer.push(a[i][k+1][j])  //все элементы столбца в один массив 
            }
        }
    }
    //проверка есть ли элементы вида 0,0,3,0,0....
        // let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
        // let c = []                      //массив для вывода
        // let h


        for (let i = n; i < n+3; i++){
            let q = 0
            if (a[i][k+1].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[i][k+1][j] == 0){
                        q += 1
                    }
                    else{
                        h = a[i][k+1][j]
                    }
                }
                if (q==8){
                    c[1][0] = i
                    c[1][1] = k+1
                    c[1][2] = h
                    p += 1
                }
            }
        }
        //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
        if (p != 1) {
            for (let i = n; i < n+3; i++){
                if (a[i][k+1].length <= 9){
                    for (let j = 0; j < 9; j++){
                        if (a[i][k+1][j] == answer[0]){
                            c[1][0] = i
                            c[1][1] = k+1
                            c[1][2] = answer[0]
                        }
                    }
                }
            }
        }
    

//третий столбец матрицы 3 на 3     
    for (let i = n; i < n+3; i++){
        if (a[i][k+2].length <= 9){
            for (let j = 0; j < 9; j++){
                answer.push(a[i][k+2][j])  //все элементы столбца в один массив 
            }
        }
    }
    //проверка есть ли элементы вида 0,0,3,0,0....
        // let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
        // let c = []                      //массив для вывода
        // let h


    for (let i = n; i < n+3; i++){
        let q = 0
        if (a[i][k+2].length <= 9){
            for (let j = 0; j < 9; j++){
                if (a[i][k+2][j] == 0){
                    q += 1
                }
                else{
                    h = a[i][k+2][j]
                }
            }
            if (q==8){
                c[2][0] = i
                c[2][1] = k+2
                c[2][2] = h
                p += 1
            }
        }
    }
    //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
    answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
    if (p != 1) {
        for (let i = n; i < n+3; i++){
            if (a[i][k+2].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[i][k+2][j] == answer[0]){
                        c[2][0] = i
                        c[2][1] = k+2
                        c[2][2] = answer[0]
                    }
                }
            }
        }
        if (c[0].length != 0){
            return c[0]
        }
        if (c[1].length != 0){
            return c[1]
        }
        if (c[2].length !=0 ){
            return c[2]
        }
    }
    return ""
}

let sudokuModifed = Sudoku([
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
const sudokuMakerNumDeletor = (sudoku, strNum, colNum, setCellValue) =>{ //Функция удаление значений - дубликатов значений stable
    let cellValue=0;
    let cellValueIndex=0;
    if(setCellValue){
        cellValue=setCellValue;
        cellValueIndex=setCellValue;
        for(let i=0; i<9;i++){
            sudoku[strNum][colNum][i]=0;
        }
        sudoku[strNum][colNum][cellValueIndex-1]=cellValue;
    }
    while(cellValue==0){
        cellValue=sudoku[strNum][colNum][cellValueIndex];
        cellValueIndex+=1;
    }
    for(let colNumDel = 0; colNumDel<9; colNumDel++){ //Убираем возможные числа из клеток, где в связи-cтроке есть stable клетки
        if(colNumDel!=colNum){
            sudoku[strNum][colNumDel][cellValueIndex-1]=0;
        }
    }
    for(let strNumDel = 0; strNumDel<9; strNumDel++){ //Убираем возможные числа из клеток, где в связи-cтолбе есть stable клетки
        if(strNumDel!=strNum){
            sudoku[strNumDel][colNum][cellValueIndex-1]=0;
        }
    }
    //Убираем возможные числа из клеток, где в связи-блоке3х3 есть stable клетки
    let block3x3str = Math.floor(strNum/3);
    let block3x3col = Math.floor(colNum/3);
    for(let block3x3strNum = block3x3str*3; block3x3strNum < ((block3x3str+1)*3); block3x3strNum++){
        for(let block3x3colNum = block3x3col*3; block3x3colNum < ((block3x3col+1)*3); block3x3colNum++){
            if((block3x3strNum!=strNum)||(block3x3colNum!=colNum)){
                sudoku[block3x3strNum][block3x3colNum][cellValueIndex-1]=0;
            }
        }
    }
}

const sudokuMakerSetStr = (sudoku, strNum) =>{
    let result = getSetStr(sudoku, strNum);
    if(result!=""){
        sudoku[result[0]][result[1]].push("stable");
        sudokuMakerNumDeletor(sudoku, result[0], result[1], result[2]);
        sudokuMakerSetMultiCheck(sudoku, result[0], result[1]);
    }
}

const sudokuMakerSetCol = (sudoku, colNum) =>{
    let result = getSetcolumn(sudoku, colNum);
    if(result!=""){
        sudoku[result[0]][result[1]].push("stable");
        sudokuMakerNumDeletor(sudoku, result[0], result[1], result[2]);
        sudokuMakerSetMultiCheck(sudoku, result[0], result[1]);
    }
}

const sudokuMakerSet3x3Block = (sudoku, strNum, colNum) =>{
    let block3x3str = Math.floor(strNum/3);
    let block3x3col = Math.floor(colNum/3);
    let result = getSet3x3(sudoku, block3x3str, block3x3col)
    if(result!=""){
        sudoku[result[0]][result[1]].push("stable");
        sudokuMakerNumDeletor(sudoku, result[0], result[1], result[2]);
        sudokuMakerSetMultiCheck(sudoku, result[0], result[1]);
    }
}
const sudokuMakerSetMultiCheck = (sudoku, strNum, colNum) =>{
    let block3x3str = Math.floor(strNum/3);
    let block3x3col = Math.floor(colNum/3);
    sudokuMakerSet3x3Block(sudoku, block3x3str, block3x3col)
    for(let block3x3strNum = block3x3str*3; block3x3strNum < ((block3x3str+1)*3); block3x3strNum++){
        sudokuMakerSetStr(sudoku, block3x3strNum);
    }
    for(let block3x3colNum = block3x3col*3; block3x3colNum < ((block3x3col+1)*3); block3x3colNum++){
        sudokuMakerSetCol(sudoku, block3x3colNum);
    }
}

const sudokuMaker = (sudoku) => {
    for(let strNum = 0; strNum<9; strNum++){ //Убираем возможные числа из клеток, где в связи есть stable клетки
        for(let colNum = 0; colNum<9; colNum++){
            if(sudoku[strNum][colNum].length>9){
                sudokuMakerNumDeletor(sudoku, strNum, colNum);
            }
        }
    }
    for(let strNum = 0; strNum<9; strNum++){ //Убираем возможные числа из клеток, где в связи есть stable клетки
        for(let colNum = 0; colNum<9; colNum++){
            sudokuMakerSetMultiCheck(sudoku, strNum, colNum);
        }
    }
    return sudoku
}

const sudokuMakerProgramm = (inputSudoku) => {
    let sudoku = Sudoku(inputSudoku)
    let sudokuMaked = sudokuMaker(sudoku);
    let sudokuFinal = []
    for(let strNum=0; strNum<9; strNum++){
        sudokuFinal.push([])
        for(let colNum=0; colNum<9; colNum++){
            sudokuFinal[strNum].push(0)
            for(let colIndex=0; colIndex<9; colIndex++){
                let celValue=sudokuMaked[strNum][colNum][colIndex]
                if(celValue!=0){
                    sudokuFinal[strNum][colNum]=celValue;
                }
            }
        }
    }
    return sudokuFinal
}
console.log(sudokuMakerProgramm([
    [1, 7, 9, 0, 0, 0, 0, 4, 3],
    [0, 6, 0, 0, 0, 0, 0, 2, 1],
    [4, 0, 2, 0, 0, 1, 9, 8, 0],
    [6, 0, 7, 0, 0, 0, 0, 1, 0],
    [5, 0, 0, 0, 1, 2, 3, 9, 0],
    [3, 0, 1, 4, 9, 7, 0, 0, 0],
    [9, 0, 0, 3, 0, 5, 0, 7, 4],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 8],
]))