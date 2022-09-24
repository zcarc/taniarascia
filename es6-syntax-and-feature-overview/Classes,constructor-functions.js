// ES6 introducess the class syntax on top of the prototype-based constructor function.

// ES5
function Func(a, b) {
  this.a = a;
  this.b = b;
}

Func.prototype.getSum = function () {
  return this.a + this.b;
};

var x = new Func(3, 4);

// ES6
class Func {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getSum() {
    return this.a + this.b;
  }
}

let x = new Func(3, 4);

x.getSum(); // returns 7
