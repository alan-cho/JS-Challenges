/*
Write a program that computes the score of a given word in the rules of Scrabble.

Problem:
  Sum all the values of the tiles used in each word.
  Tile Values:
  A, E, I, O, U, L, N, R, S, T => 1
  D, G =>	2
  B, C, M, P => 3
  F, H, V, W, Y => 4
  K => 5
  J, X => 8
  Q, Z => 10

Data Structure:
  Object

Algorithm:
  Convert the word into an object:
    Iterate through the word as an array:
      If the property exists in the object (letter), add one to its value.
      Otherwise, create the property and set its value to one.
  
  Iterate through the object's keys (letters):
    Check if the letter is in the corresponding tile value sets:
      If so, add it to the total.
  
  Return the total.
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static TILE_VALUES = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d", "g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j", "x"],
    10: ["q", "z"],
  };

  static getTileValueFromTiles(tiles) {
    return Object.keys(Scrabble.TILE_VALUES).find(
      (tileValue) => Scrabble.TILE_VALUES[tileValue] === tiles
    );
  }

  convertWordToObject(word) {
    let letterArray = word.toLowerCase().split("");
    let letterObject = {};

    letterArray.forEach((letter) => {
      if (!letterObject[letter]) {
        letterObject[letter] = 1;
      } else {
        letterObject[letter] += 1;
      }
    });

    return letterObject;
  }

  score() {
    if (this.word === null) {
      return 0;
    }

    let letterObject = this.convertWordToObject(this.word);
    let letterObjectKeys = Object.keys(letterObject);
    let tileValues = Object.values(Scrabble.TILE_VALUES);
    let points = 0;

    console.log(letterObject, letterObjectKeys);

    letterObjectKeys.forEach((letter) => {
      for (let index = 0; index < tileValues.length; index += 1) {
        if (tileValues[index].includes(letter)) {
          points +=
            Number(Scrabble.getTileValueFromTiles(tileValues[index])) *
            letterObject[letter];
        }
      }
    });

    return points;
  }
}

module.exports = Scrabble;
