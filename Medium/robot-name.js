/*
Write a program that manages robot factory settings.
*/
Math.seedrandom = require("seedrandom");

class Robot {
  static names = [];

  name() {
    if (this.robotName) return this.robotName;

    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }

    Robot.names.push(this.robotName);
    return this.robotName;
  }

  reset() {
    let nameIdx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIdx, 1);
    this.robotName = null;
  }

  generateName() {
    let name = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let alphaCount = 1; alphaCount <= 2; alphaCount++) {
      name += chars[this.randomNum(0, chars.length)];
    }

    for (let digitCount = 1; digitCount <= 3; digitCount++) {
      name += this.randomNum(0, 9);
    }

    return name;
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = Robot;
