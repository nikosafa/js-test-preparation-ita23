/**
 * This function greets a user by name.
 *
 * @param {string} name - Name of the user.
 * @returns {string} - Greeting message for the user.
 *
 * Usage:
 * const greetJack = greetUser("Jack"); // greetJack will be "Hello, Jack"
 */

function greetUser(name) {
    return "Hello, " + name;
}

const greetJack = greetUser("Jack");
console.log(greetJack);


/**
 * This function converts a string to spinal case.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The spinal cased string.
 *
 * Usage:
 * const spinal = toSpinalCase("This Is Spinal Tap"); // spinal will be "this-is-spinal-tap"
 */

function spinalCase (str) {
    return result
}
const res = toSpinalCase("This Is Spinal Tap")
console.log(toSpinalCase)

/**
 * This function calculates the time taken by light to travel a certain distance.
 *
 * @param {number} distance - The distance in kilometers.
 * @returns {number} - Time taken in seconds.
 *
 * Usage:
 * const time = lightTravelTime(600000); // time will be 2
 */
function lightTravelTime(distance) {
    const speedOfLight = 300000;

    // Returnere 0 for distancen af 0 km
    if (distance === 0) {
        return 0;
    }
    return distance / speedOfLight;
}

console.log(lightTravelTime(0));
console.log(lightTravelTime(600000));
console.log(lightTravelTime(300000));



/**
 * This function checks if two words are mirror words.
 *
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {boolean} - True if word1 is a mirror of word2, false otherwise.
 *
 * Usage:
 * const isMirror = mirrorWordCheck("stressed", "desserts"); // isMirror will be true
 * const notMirror = mirrorWordCheck("hello", "world"); // notMirror will be false
 */
function mirrorWordCheck(word1, word2) {

}



