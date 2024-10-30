/**
 * This function returns the next even number after the given number.
 *
 * @param {number} n - The number.
 * @returns {number} - The next even number after the given number.
 *
 * Usage:
 * const nextEven = getNextEven(3); // nextEven will be 4
 * const anotherNextEven = getNextEven(8); // anotherNextEven will be 10
 */

function getNextEven(n) {
    for (let i = n + 1; ; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
}

console.log(getNextEven(3));
console.log(getNextEven(8));



/**
 * This function checks if a number is a multiple of another number.
 *
 * @param {number} n - The number to check.
 * @param {number} m - The number to check divisibility against.
 * @returns {boolean} - True if n is a multiple of m, false otherwise.
 *
 * Usage:
 * const isMultiple = isMultipleOf(10, 2); // isMultiple will be true because 2 can be divided with 10
 * const notMultiple = isMultipleOf(10, 3); // notMultiple will be false
 */

function isMultipleOf(n, m) {

}


/**
 * This function counts the number of uppercase letters in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} - The count of uppercase letters.
 *
 * Usage:
 * const capitalCount = countCapitals("Hello World"); // capitalCount will be 2
 * const anotherCapitalCount = countCapitals("JavaScript"); // anotherCapitalCount will be 2
 */
function countCapitals(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }

    return count;
}


console.log(countCapitals("Hello World"));
console.log(countCapitals("JavaScript"));
console.log(countCapitals(""));
console.log(countCapitals("test"));
console.log(countCapitals("ALLUPPERCASE"));
console.log(countCapitals("1234!@#$%^&*()"));
console.log(countCapitals("Mix3d C@seS!"));
console.log(countCapitals("Hello123!"));

/**
 * This function takes two words, combines them, and counts the number of vowels.
 *
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {number} - The total number of vowels in both words combined.
 *
 * Usage:
 * const vowelCount = countVowelsInWords("hello", "world"); // vowelCount will be 3
 * const anotherCount = countVowelsInWords("apple", "banana"); // anotherCount will be 5
 */
function countVowelsInWords(word1, word2) {

}
