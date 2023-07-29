/*
Write a program that can do octal to decimal conversion.

Problem:
  Given an octal input string, return a decimal output. Invalid input should be treated as octal zero.
  Octal (Base-8):
    Decimal is a base-10 system. A number can be understood in a linear combination of powers of 10.
    Octals use a base-8 system where they use a linear combination of powers of 8.
    All of these digits get summed.
*/

class Octal {
  constructor(octalNum) {
    this.octalNum = octalNum;
  }

  isValidOctal(octalNum) {
    let octalNumArray = octalNum.split("");
    const validDigits = ["0", "1", "2", "3", "4", "5", "6", "7"];

    if (octalNumArray.every((digit) => validDigits.includes(digit))) {
      return true;
    } else {
      return false;
    }
  }

  toDecimal() {
    if (!this.isValidOctal(this.octalNum)) {
      return 0;
    }

    let decimalTotal = 0;
    let reversedOctalNum = this.octalNum.split("").reverse().join("");
    let octalLength = this.octalNum.length;

    for (let placeDigit = 0; placeDigit < octalLength; placeDigit += 1) {
      decimalTotal += Math.pow(8, placeDigit) * reversedOctalNum[placeDigit];
    }

    return decimalTotal;
  }
}

module.exports = Octal;
