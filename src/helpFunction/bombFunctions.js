//  array with location of bomb
//  @qty - how many bombs on the field
const bombArray = [];

const getBombArray = (qty) => {
    while (bombArray.length < qty) {
        const number = Math.floor(Math.random() * 100)
        if (bombArray.indexOf(number) === -1) {
            bombArray.push(number)
        }
    }
    return bombArray;
}

export default getBombArray;


// console.log(getBombArray(10))

// Result 
// [
//     3, 33, 56, 4, 81,
//    19, 78, 21, 6, 55
//  ]