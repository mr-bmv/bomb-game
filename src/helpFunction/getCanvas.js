const getCanvas = (bombQTY, fieldSize) => {
    const arr = [];

    const getBombArray = (qty) => {
        console.log(qty)
        while (arr.length < qty) {
            const number = Math.floor(Math.random() * fieldSize * fieldSize) + 1
            if (arr.indexOf(number) === -1) {
                arr.push(number)
            }
        }
        console.log(arr.length)
        console.log(arr)
        return arr;

    }

    let id = 1;
    const bombArray = getBombArray(bombQTY);

    // @status - 
    //          0 - did not touch by user (default)
    //          1 - left Click (green) - no bomb
    //          2 - double Click (red) - bomb
    // @value - how many bomb around 
    const getSkeletonObject = () => {
        let bomb = false;
        if (bombArray.indexOf(id) > -1) {
            bomb = true;
        }
        const obj = {
            id,
            bomb,
            status: 0
        }
        id += 1
        return obj
    };

    const getRowObject = (number) => {
        const name = [];
        let index = 1
        while (index <= number) {
            name.push(getSkeletonObject());
            index++;
        }

        return name;
    }

    const getSkeletonField = (number) => {
        const field = {};
        for (let index = 1; index <= number; index++) {
            field[index] = getRowObject(number)
        }
        return field;
    }

    const field = getSkeletonField(fieldSize)

    const getNumber = (number, column) => {

        number = +number;
        column = +column;
        // because array starts from `0`

        // column--;
        // console.log(`row${number - 1}`)

        let qty = 0
        // const x = field[`row${number}`][column]
        // check that it is not upper row
        if (number !== 1) {
            // check that it is not left column
            if (column !== 0) {
                const upLeft = field[number - 1][column - 1].bomb
                if (!upLeft) { qty++ }
            }
            const up = field[number - 1][column].bomb
            if (!up) { qty++ }
            // check that it is not Right column
            if (column !== (field[number].length - 1)) {
                const upRight = field[number - 1][column + 1].bomb
                if (!upRight) { qty++ }
            }
        }

        if (column !== 0) {
            const left = field[number][column - 1].bomb
            if (!left) { qty++ }
        }

        if (column !== (field[number].length - 1)) {
            const right = field[number][column + 1].bomb
            if (!right) { qty++ }
        }

        if (number !== Object.keys(field).length) {
            if (column !== 0) {
                const downLeft = field[number + 1][column - 1].bomb
                if (!downLeft) { qty++ }
            }
            const down = field[number + 1][column].bomb
            if (!down) { qty++ }
            if (column !== (field[number].length - 1)) {
                const downRight = field[number + 1][column + 1].bomb
                if (!downRight) { qty++ }
            }
        }

        return qty;
    }

    Object.keys(field)
        .map((row) => {
            return field[row].map(
                (cell, index) => field[row][index] = { ...cell, value: getNumber(row, index) }
            )
        })
    return field;
}

// console.log(field)
// console.log(getNumber(1, 0))
// console.log(getNumber(10, 9))
// console.log(getNumber(5, 5))
// console.log("Canvas - ", getCanvas())

export default getCanvas;