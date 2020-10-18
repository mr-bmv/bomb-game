/**
 *  create `00:00` view from number of seconds
 * @param {number} seconds 
 * 
 * return string
 */
const transformSeconds = (seconds) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60;
    return `${min > 9 ? '' : 0}${min} : ${sec > 9 ? '' : 0}${sec}`;

}

export default transformSeconds;
