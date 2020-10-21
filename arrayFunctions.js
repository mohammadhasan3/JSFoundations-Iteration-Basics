/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  // Your code here
  let Odds = numbers.filter(function (number) {
    return number % 2 === 1;
  });

  return Odds;
}

/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
function getEvens(numbers) {
  // Your code here
  let Evens = numbers.filter(function (number) {
    return number % 2 !== 1;
  });

  return Evens;
}

/**
 * getDuplicateCount(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function getDuplicateCount(x, numbers) {
  // Your code here
  let count = 0;

  numbers.forEach(function (number) {
    if (number === x) {
      count++;
    } else {
      count = count;
    }

    return count;
  });

  return count;
}

/**
 * makeThemDoctors(students):
 * - receives array `students`
 * - returns an array with the same elements of students with prefix `Dr. `
 *
 * e.g.
 * makeThemDoctors(["Ali", "Aseel", "Richard"]) -> ["Dr. Ali", "Dr. Aseel", "Dr. Richard"]
 */

function makeThemDoctors(students) {
  // Your code here

  let drArray = students.map(function (student) {
    return `Dr. ${student}`;
  });

  return drArray;
}

module.exports = { getOdds, getEvens, getDuplicateCount, makeThemDoctors };
