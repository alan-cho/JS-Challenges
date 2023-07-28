// Write a program to determine whether a triangle is equilateral, isosceles, or scalene.
/*
Problem:
  A triangle has three sides.
  All three sides must be at least larger than zero.
  The sum of the lengths of any two sides must be greater than the third side.
    This must be true for all configurations - Triangle Inequality Theorem.

  Determine the type of triangle depending on the values given.
  Equilateral - Three sides of the same length.
  Isosceles - Two sides of the same length.
  Scalene - All three sides are different lengths.

Data Structure:
  Array

Algorithm:
  Verify that the triangle is legal.
    Throw an error if it's not legal.
  
  If the triangle is legal, determine what type it is:
  Check if all sides are unique:
    Return Scalene.
  Else, check if two sides are identical:
    Return Isosceles.
  Else,
    Return Equilateral.
*/

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.sides = [this.sideA, this.sideB, this.sideC];
    Triangle.verifyTriangle(this.sides);
  }

  static verifyTriangle(sides) {
    Triangle.verifyPositiveSides(sides);
    Triangle.verifyTriangleInequality(sides);
  }

  static verifyTriangleInequality(sides) {
    const expressionOne = sides[0] + sides[1] > sides[2];
    const expressionTwo = sides[0] + sides[2] > sides[1];
    const expressionThree = sides[1] + sides[2] > sides[0];

    if (!(expressionOne && expressionTwo && expressionThree)) {
      throw new Error("Fails the Triangle Inequality Theorem.");
    }
  }

  static verifyPositiveSides(sides) {
    if (!sides.every((side) => side > 0)) {
      throw new Error("Not all sides are positive.");
    }
  }

  static equilateral(sides) {
    return sides[0] === sides[1] && sides[0] === sides[2];
  }

  static isosceles(sides) {
    let expressionOne = sides[0] === sides[1] && sides[2] !== sides[0];
    let expressionTwo = sides[1] === sides[2] && sides[0] !== sides[1];
    let expressionThree = sides[0] === sides[2] && sides[1] !== sides[0];
    return expressionOne || expressionTwo || expressionThree;
  }

  static scalene(sides) {
    return (
      sides[0] !== sides[1] && sides[0] !== sides[2] && sides[1] !== sides[2]
    );
  }

  kind() {
    if (Triangle.equilateral(this.sides)) {
      return "equilateral";
    } else if (Triangle.isosceles(this.sides)) {
      return "isosceles";
    } else if (Triangle.scalene(this.sides)) {
      return "scalene";
    }
  }
}

module.exports = Triangle;
