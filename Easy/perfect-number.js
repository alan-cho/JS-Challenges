/*
Write a program that can determine whether a natural number is an abundant, perfect, or deficient number.

Problem:
  Aliquot Sum: The sum of the positive divisors of a number. It doesn't include the number itself.
    Positive divisors are numbers that can divide the target number with no remainders.
  Given a natural number (positive integers), determine which category it belongs to:
    Perfect: Aliquot Sum = Target Number
    Abundant: Aliquot Sum > Target Number
    Deficient: Aliquot Sum < Target Number

Data Structure:
  Array

Algorithm:
  Find all the positive divisors of the input number:
    Does it evenly divide by...
      2 - 9?
    Add the positive divisors to an array.
  Iterate through the array and add up its elements.
  Compare it to the target number and return its corresponding category.
*/

let PerfectNumber = {
  isValidNumber(number) {
    if (number < 0) {
      throw new Error("Invalid Number");
    }
  },

  findPositiveDivisors(number) {
    let positiveDivisors = [1];

    for (let divisor = 2; divisor < number; divisor += 1) {
      if (number % divisor === 0) {
        positiveDivisors.push(divisor);
      }
    }

    return positiveDivisors;
  },

  findAliquotSum(divisors) {
    let aliquotSum = 0;
    divisors.forEach((num) => (aliquotSum += num));

    return aliquotSum;
  },

  classify(number) {
    this.isValidNumber(number);

    let positiveDivisors = this.findPositiveDivisors(number);
    let aliquotSum = this.findAliquotSum(positiveDivisors);

    if (aliquotSum < number) {
      return "deficient";
    } else if (aliquotSum > number) {
      return "abundant";
    } else if (aliquotSum === number) {
      return "perfect";
    }
  },
};

module.exports = PerfectNumber;
