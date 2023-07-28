/*
Write a program that can calculate the Hamming distance between two DNA strands.

Problem:
  Given two nucleic acid sequences (DNA), determine the number of point mutations between the two strands.
  The strand that is being compared will be the shorter length strand if they're different sizes.
    Point mutations are differences in nucleotides in the two strands.

  Can be given inputs of varying string lengths, even zero.

Data Structure:
  Strings

Algorithm:
  Store the first DNA strand, and then the second DNA strand.
  Compare the lengths of the two strands, whichever has the smaller length will be used.
  Declare a variable, mutations, to count the number of point mutations.
  Iterate through the smaller string:
    At each index, compare the two DNA nucleotides.
    If they're different:
      Add one to mutations.
    Else:
      Continue the iteration.
  Return mutations.
*/

class DNA {
  constructor(dnaOne) {
    this.dnaOne = dnaOne;
  }

  hammingDistance(dnaTwo) {
    let smallestDNA;
    if (this.dnaOne.length < dnaTwo.length) {
      smallestDNA = this.dnaOne;
    } else {
      smallestDNA = dnaTwo;
    }

    let numOfMutations = 0;
    for (let index = 0; index < smallestDNA.length; index += 1) {
      if (this.dnaOne[index] !== dnaTwo[index]) {
        numOfMutations += 1;
      }
    }

    return numOfMutations;
  }
}

module.exports = DNA;
