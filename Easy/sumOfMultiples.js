/*
Write a program that, given a natural number and a set of one or more other numbers,
can find the sum of all the multiples of the numbers in the set that are less than
the first number. If the set of numbers is not given, use a default set of 3 and 5.
*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length > 0 ? multiples : [3, 5];
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }

  to(num) {
    let addends = [];

    for (let currentNum = 1; currentNum < num; currentNum++) {
      if (this.anyMultiple(currentNum)) {
        addends.push(currentNum);
      }
    }

    return addends.reduce((acc, addend) => acc + addend, 0);
  }

  anyMultiple(num) {
    return this.multiples.some((multiple) => {
      return num % multiple === 0;
    });
  }
}

module.exports = SumOfMultiples;
module.exports = SumOfMultiples;
