/*
Write a program that will take a string of digits and return all possible consecutive number series of a specified length in that string.
*/

class Series {
  constructor(numberSeries) {
    this.numberSeries = numberSeries;
  }

  slices(size) {
    if (size > this.numberSeries.length) {
      throw new Error("invalid size");
    }

    let result = [];
    let numArray = this.numberSeries.split("");

    for (let i = 0; i < numArray.length - (size - 1); i += 1) {
      let array = [];
      for (let j = i; j < i + size; j += 1) {
        array.push(Number(numArray[j]));
      }
      result.push(array);
    }

    return result;
  }
}

module.exports = Series;
