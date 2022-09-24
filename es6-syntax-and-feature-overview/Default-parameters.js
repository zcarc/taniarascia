// Functions can be initialized with default parameters,
// which will be used only if an argument is not invoked through the function.

// ES5
var func = function (a, b) {
  b = b === undefined ? 2 : b;
  return a + b;
};

// ES6
let func = (a, b = 2) => {
  return a + b;
};

func(10); // returns 12
func(10, 5); // returns 15
