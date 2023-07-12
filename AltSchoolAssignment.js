const assignment = {};

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;

  for (let arr of arrayOfNumbers) {
    sum += arr;
  }
  return sum;
}
console.log(sumOfNumbers(arrayOfNumbers));

// function sumOfNumbers(arrayOfNumbers) {
//   let sum = 0;
//   for (let i = 0; i < arrayOfNumbers.length; i++){
//     sum += arrayOfNumbers[i]
//   }return sum;
// }
// console.log(sumOfNumbers(arrayOfNumbers))





/**
 * Challenge - 2
 *
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

function countEvenNumbers(arrayOfNumbers) {
  let countEvenNumbers = 0;

  for (let number of arrayOfNumbers) {
    if (number % 2 === 0) {
      countEvenNumbers++;
    } else countEvenNumbers = countEvenNumbers;
  }
  return countEvenNumbers;
}

console.log(countEvenNumbers(arrayOfNumbers));

//function countEven(arrayOfNumbers) {
// return arrayOfNumbers.length;
//}

const countEven = (arrayOfNumbers) => {
  //initializattion
  let countEven = 0;

  //condition
  for (let number of arrayOfNumbers) {
    if (number % 2 === 0) {
      //increment
      countEven++;
    }
    countEven = countEven;
  }
  return countEven;
};
console.log(countEven(arrayOfNumbers));


module.exports = assignment;