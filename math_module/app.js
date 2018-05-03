
var my_module = require('./mathlib')();

my_module.add(4,5);
console.log(my_module.add(4, 5));
console.log(my_module.multiply(4, 5));
console.log(my_module.square(4));
console.log(my_module.random(4, 10));