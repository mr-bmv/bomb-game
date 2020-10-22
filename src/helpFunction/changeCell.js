/**
 * Function for change main object of game and catch new state for main properties
 * Return new `Score` and new `canvas`
 * @param {number} row - like `y` coordinate on the field
 * @param {number} column - like `x` coordinate on the field
 * @param {object} field - main object where all changes would be done
 */
const changeCell = (row, column, field) => {

    const before = field.canvas[row].slice(0, column);
    const my = {
        ...field.canvas[row][column],
        // circle from 0 till 2
        status: (field.canvas[row][column].status === 2 ? 0 : field.canvas[row][column].status + 1)
    }
    const after = field.canvas[row].slice(column + 1)

    let newScore = field.score;
    if (my.status === 2) {
        newScore = field.canvas[row][column].bomb ? (field.score + 1) : field.score
    }
    if (my.status === 0) {
        newScore = field.canvas[row][column].bomb ? (field.score - 1) : field.score
    }

    const { canvas } = field;
    const updateCanvas = {
        ...canvas,
        [row]: [...before, my, ...after],
    }

    console.log(updateCanvas, newScore)
    return { updateCanvas, newScore };

}

export default changeCell;