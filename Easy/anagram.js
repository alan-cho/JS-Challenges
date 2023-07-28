/*
Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains the anagrams of the word.

Problem:
  Given a list of words - select the words that are anagrams of the inputted word.
  The selection is case-insensitive and doesn't count if the word is the exact same.

Data Structures:
  Array
  Object

Algorithm:
  Go through the input array:
    Compare the input word with each element of the input array:
      Check if they're same lengths - otherwise it can't be an anagram.
      Check for any unique letters between the two - can't be an anagram if there are.
    If the word shares the same letter count and unique letters - counts as an anagram.
*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(list) {
    let wordArray = this.word.toLowerCase().split("");
    let anagramArray;
    let wordLetterCount = this.createLetterCount(wordArray);
    let anagramLetterCount;
    let anagrams = [];

    for (let index = 0; index < list.length; index += 1) {
      if (this.word.length !== list[index].length) {
        continue;
      } else if (this.word.toLowerCase() === list[index].toLowerCase()) {
        continue;
      }

      anagramArray = list[index].toLowerCase().split("");
      anagramLetterCount = this.createLetterCount(anagramArray);

      if (this.compareLetterCounts(wordLetterCount, anagramLetterCount)) {
        anagrams.push(list[index]);
      }
    }

    return anagrams;
  }

  createLetterCount(word) {
    let letterCount = {};

    word.forEach((letter) => {
      if (!letterCount[letter]) {
        letterCount[letter] = 1;
      } else {
        letterCount[letter] += 1;
      }
    });

    return letterCount;
  }

  compareLetterCounts(word, anagram) {
    let wordKeys = Object.keys(word);
    let anagramKeys = Object.keys(anagram);

    if (wordKeys.length === anagramKeys.length) {
      return wordKeys.every(
        (letter) =>
          anagram.hasOwnProperty(letter) && anagram[letter] === word[letter]
      );
    }
  }
}

let anagram = new Anagram("ant");
console.log(anagram.match(["tan", "stand", "at"]));

module.exports = Anagram;
