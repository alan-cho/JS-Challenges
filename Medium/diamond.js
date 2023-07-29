/*
Write a program that takes an input letter and outputs it in a diamond shape. The input letter is the letter at the widest point.
*/

class Diamond {
  static alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  static makeDiamond(letter) {
    if (letter === "A") {
      return "A\n";
    }

    let diamondMessage = "";
    let middleRow = Diamond.createMiddleRow(letter);
    let topHalf = Diamond.createTopHalf(letter, middleRow.length - 1);
    let botHalf = Diamond.createBotHalf(letter, middleRow.length - 1);

    diamondMessage += topHalf;
    diamondMessage += middleRow;
    diamondMessage += botHalf;

    return diamondMessage;
  }

  static createTopHalf(letter, size) {
    let letterPos = Diamond.alphabet.indexOf(letter);
    let topHalf = "";
    let row = "";
    let numberOfSpaces = 1;
    let margin;

    for (let i = 0; i < letterPos; i += 1) {
      if (numberOfSpaces === 2) {
        numberOfSpaces = 1;
      }

      if (Diamond.alphabet[i] === "A") {
        numberOfSpaces = 0;
        margin = (size - 1) / 2;
        row = `${" ".repeat(margin)}${Diamond.alphabet[i]}${" ".repeat(margin)}\n`;
      } else {
        margin = (size - numberOfSpaces - 2) / 2;
        row = `${" ".repeat(margin)}${Diamond.alphabet[i]}${" ".repeat(numberOfSpaces)}${
          Diamond.alphabet[i]
        }${" ".repeat(margin)}\n`;
      }

      topHalf += row;
      numberOfSpaces += 2;
    }

    return topHalf;
  }

  static createMiddleRow(letter) {
    let letterPos = Diamond.alphabet.indexOf(letter);
    let middleRow;
    let numberOfSpaces = 1;

    for (let i = 1; i < letterPos; i += 1) {
      numberOfSpaces += 2;
    }

    middleRow = `${letter}${" ".repeat(numberOfSpaces)}${letter}\n`;
    return middleRow;
  }

  static createBotHalf(letter, size) {
    let letterPos = Diamond.alphabet.indexOf(letter) - 1;
    let botHalf = "";
    let row;
    let numberOfSpaces = size - 4;
    let margin;

    for (let i = letterPos; i > -1; i -= 1) {
      if (Diamond.alphabet[i] === "A") {
        numberOfSpaces = 0;
        margin = (size - 1) / 2;
        row = `${" ".repeat(margin)}${Diamond.alphabet[i]}${" ".repeat(margin)}\n`;
      } else {
        margin = (size - numberOfSpaces - 2) / 2;
        row = `${" ".repeat(margin)}${Diamond.alphabet[i]}${" ".repeat(numberOfSpaces)}${
          Diamond.alphabet[i]
        }${" ".repeat(margin)}\n`;
      }
      botHalf += row;
      numberOfSpaces -= 2;
    }

    return botHalf;
  }
}

module.exports = Diamond;
