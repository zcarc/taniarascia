// A more concise syntax has been introduced for iteration through arrays and other iterable objects.

var arr = ["a", "b", "c"];

// ES5
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ES6
for (let i of arr) {
  console.log(i);
}
