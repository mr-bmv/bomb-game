let id = 1;

const getCellObject = () => {
    const obj = {
        "id": id,
        "bomb": false,
        "status": 0,
        "value": null
    }
    id += 1
    return obj
};

const getRowObject = (number) => {
    const name = [];
    let index = 1
    while (index <= number) {
        name.push(getCellObject())
        index++
    }

    return name;
}

const getField = (number) => {
    const field = {};
    for (let index = 1; index <= number; index++) {
        field[`row${index}`] = getRowObject(number)
    }
    return field;
}

export default getField;

// console.log(getField(10))

// result of this getField for 10 rows
// {
//     row1: [
//       { id: 1, bomb: false, status: 0, value: null },
//       { id: 2, bomb: false, status: 0, value: null },
//       { id: 3, bomb: false, status: 0, value: null },
//       { id: 4, bomb: false, status: 0, value: null },
//       { id: 5, bomb: false, status: 0, value: null },
//       { id: 6, bomb: false, status: 0, value: null },
//       { id: 7, bomb: false, status: 0, value: null },
//       { id: 8, bomb: false, status: 0, value: null },
//       { id: 9, bomb: false, status: 0, value: null },
//       { id: 10, bomb: false, status: 0, value: null }
//     ],
//     row2: [
//       { id: 11, bomb: false, status: 0, value: null },
//       { id: 12, bomb: false, status: 0, value: null },
//       { id: 13, bomb: false, status: 0, value: null },
//       { id: 14, bomb: false, status: 0, value: null },
//       { id: 15, bomb: false, status: 0, value: null },
//       { id: 16, bomb: false, status: 0, value: null },
//       { id: 17, bomb: false, status: 0, value: null },
//       { id: 18, bomb: false, status: 0, value: null },
//       { id: 19, bomb: false, status: 0, value: null },
//       { id: 20, bomb: false, status: 0, value: null }
//     ],
//     row3: [
//       { id: 21, bomb: false, status: 0, value: null },
//       { id: 22, bomb: false, status: 0, value: null },
//       { id: 23, bomb: false, status: 0, value: null },
//       { id: 24, bomb: false, status: 0, value: null },
//       { id: 25, bomb: false, status: 0, value: null },
//       { id: 26, bomb: false, status: 0, value: null },
//       { id: 27, bomb: false, status: 0, value: null },
//       { id: 28, bomb: false, status: 0, value: null },
//       { id: 29, bomb: false, status: 0, value: null },
//       { id: 30, bomb: false, status: 0, value: null }
//     ],
//     row4: [
//       { id: 31, bomb: false, status: 0, value: null },
//       { id: 32, bomb: false, status: 0, value: null },
//       { id: 33, bomb: false, status: 0, value: null },
//       { id: 34, bomb: false, status: 0, value: null },
//       { id: 35, bomb: false, status: 0, value: null },
//       { id: 36, bomb: false, status: 0, value: null },
//       { id: 37, bomb: false, status: 0, value: null },
//       { id: 38, bomb: false, status: 0, value: null },
//       { id: 39, bomb: false, status: 0, value: null },
//       { id: 40, bomb: false, status: 0, value: null }
//     ],
//     row5: [
//       { id: 41, bomb: false, status: 0, value: null },
//       { id: 42, bomb: false, status: 0, value: null },
//       { id: 43, bomb: false, status: 0, value: null },
//       { id: 44, bomb: false, status: 0, value: null },
//       { id: 45, bomb: false, status: 0, value: null },
//       { id: 46, bomb: false, status: 0, value: null },
//       { id: 47, bomb: false, status: 0, value: null },
//       { id: 48, bomb: false, status: 0, value: null },
//       { id: 49, bomb: false, status: 0, value: null },
//       { id: 50, bomb: false, status: 0, value: null }
//     ],
//     row6: [
//       { id: 51, bomb: false, status: 0, value: null },
//       { id: 52, bomb: false, status: 0, value: null },
//       { id: 53, bomb: false, status: 0, value: null },
//       { id: 54, bomb: false, status: 0, value: null },
//       { id: 55, bomb: false, status: 0, value: null },
//       { id: 56, bomb: false, status: 0, value: null },
//       { id: 57, bomb: false, status: 0, value: null },
//       { id: 58, bomb: false, status: 0, value: null },
//       { id: 59, bomb: false, status: 0, value: null },
//       { id: 60, bomb: false, status: 0, value: null }
//     ],
//     row7: [
//       { id: 61, bomb: false, status: 0, value: null },
//       { id: 62, bomb: false, status: 0, value: null },
//       { id: 63, bomb: false, status: 0, value: null },
//       { id: 64, bomb: false, status: 0, value: null },
//       { id: 65, bomb: false, status: 0, value: null },
//       { id: 66, bomb: false, status: 0, value: null },
//       { id: 67, bomb: false, status: 0, value: null },
//       { id: 68, bomb: false, status: 0, value: null },
//       { id: 69, bomb: false, status: 0, value: null },
//       { id: 70, bomb: false, status: 0, value: null }
//     ],
//     row8: [
//       { id: 71, bomb: false, status: 0, value: null },
//       { id: 72, bomb: false, status: 0, value: null },
//       { id: 73, bomb: false, status: 0, value: null },
//       { id: 74, bomb: false, status: 0, value: null },
//       { id: 75, bomb: false, status: 0, value: null },
//       { id: 76, bomb: false, status: 0, value: null },
//       { id: 77, bomb: false, status: 0, value: null },
//       { id: 78, bomb: false, status: 0, value: null },
//       { id: 79, bomb: false, status: 0, value: null },
//       { id: 80, bomb: false, status: 0, value: null }
//     ],
//     row9: [
//       { id: 81, bomb: false, status: 0, value: null },
//       { id: 82, bomb: false, status: 0, value: null },
//       { id: 83, bomb: false, status: 0, value: null },
//       { id: 84, bomb: false, status: 0, value: null },
//       { id: 85, bomb: false, status: 0, value: null },
//       { id: 86, bomb: false, status: 0, value: null },
//       { id: 87, bomb: false, status: 0, value: null },
//       { id: 88, bomb: false, status: 0, value: null },
//       { id: 89, bomb: false, status: 0, value: null },
//       { id: 90, bomb: false, status: 0, value: null }
//     ],
//     row10: [
//       { id: 91, bomb: false, status: 0, value: null },
//       { id: 92, bomb: false, status: 0, value: null },
//       { id: 93, bomb: false, status: 0, value: null },
//       { id: 94, bomb: false, status: 0, value: null },
//       { id: 95, bomb: false, status: 0, value: null },
//       { id: 96, bomb: false, status: 0, value: null },
//       { id: 97, bomb: false, status: 0, value: null },
//       { id: 98, bomb: false, status: 0, value: null },
//       { id: 99, bomb: false, status: 0, value: null },
//       { id: 100, bomb: false, status: 0, value: null }
//     ]
//   }
