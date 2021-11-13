let Sudoku = function (place) {
    let getPlace = place
    let abda = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            a = place[i][j]
            getPlace[i][j] = [0,0,0,0,0,0,0,0,0]
            getPlace[i][j][j] = a;
            if (a!= 0){
                getPlace[i][j].push("stable")
            }
        }
    }
    place.forEach(element => {
        element.forEach(eme=>{
            console.log(eme)
        })
    
    });
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




    // for(let i = 0;i<9;i++){
    // for(let j = 0; j<9;j++){
    // for(let k = 0;k<9;k++){
    // stolbs[i].push(place[k][j])
    // }
    // }
    // }

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

}

Sudoku([
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