//  array with location of bomb
//  @qty - how many bombs on the field
const randomArray = [];

const getRandomArray = (qty) => {
    while (randomArray.length < qty) {
        const number = Math.floor(Math.random() * 100)
        if (randomArray.indexOf(number) === -1) {
            randomArray.push(number)
        }
    }
    return randomArray;
}

console.log(getRandomArray(10))

// Result 
// [
//     3, 33, 56, 4, 81,
//    19, 78, 21, 6, 55
//  ]