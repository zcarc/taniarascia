//The function keyword can be omitted when assigning methods on an object.

// ES5
var obj = {
  a: function (c, d) {},
  b: function (e, f) {},
};

// ES6
let obj = {
  a(c, d) {},
  b(e, f) {},
};

obj.a(); // call method a
