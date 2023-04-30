/**
 * @returns {string} the current time as a string
 */
const getTime = () => {
    const d = new Date();
    const time = d.toLocaleTimeString();
    return time;
}

/**
 * prints the current time to the console
 */
const printTime = () => {
    try {
        const time = getTime();
        console.log(time);
    } catch (e) {
        console.log(e);
    }
}

setInterval(printTime, 1000);