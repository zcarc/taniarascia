// The extends keyword creates a subclass.

function Func(a, b) {
  this.a = a;
  this.b = b;
}

// ES5
function Inheritance(a, b, c) {
  Func.call(this, a, b);

  this.c = c;
}

Inheritance.prototype = Object.create(Func.prototype);
Inheritance.prototype.getProduct = function () {
  return this.a * this.b * this.c;
};

var y = new Inheritance(3, 4, 5);

// ES6
class InheritanceClass extends Func {
  constructor(a, b, c) {
    super(a, b);

    this.c = c;
  }

  getProduct() {
    return this.a * this.b * this.c;
  }
}

let y_class = new InheritanceClass(3, 4, 5);

console.log(y_class);
console.log(y_class.getProduct());
