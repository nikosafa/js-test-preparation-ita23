/**
 * This function adds two numbers.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @returns {number} - The sum of the two numbers.
 *
 * Usage:
 * const result = add(2, 3); // result will be 5
 * const anotherResult = add(-1, 1); // anotherResult will be 0
 */

function add(a, b) {
    return a + b
}
let a = 1
let b = 6
const sum =  (a+b)
console.log(sum);

/**
 * This function returns the length of the provided string.
 *
 * @param {string} value - A string whose length needs to be determined.
 * @returns {number} - The length of the string.
 *
 * Usage:
 * const result = determineLength("Hello"); // result will be 5
 * const anotherResult = determineLength("AB"); // anotherResult will be 2
 */
function determineLength(value) {
    return value.length;
}

const result = determineLength('Hello');
const anotherResult = determineLength("AB");

console.log(result);
console.log(anotherResult);

/**
 * This function concatenates two strings with a specified delimiter.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @param {string} delimiter - The delimiter to be placed between the two strings.
 * @returns {string} - The concatenated string.
 *
 * Usage:
 * const result = concatenateWithDelimiter("Hello", "World", ", "); // result will be "Hello, World"
 */
function concatenateWithDelimiter(a, b, delimiter) {
    return `${a}${delimiter}${b}`;
}

const a2 = 'Hello';
const b2 = 'World';
const delimiter = ', ';

console.log(concatenateWithDelimiter(a2, b2, delimiter));

