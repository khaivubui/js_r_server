const ffi = require('ffi');
const path = require('path');

const lib = ffi.Library(
  path.join(__dirname, '../rust_fibonacci/target/release/libfibonacci.dylib'),
  {
    nth_fibonacci: ['int', ['int']]
  }
);

// ---------- * ---------- * ---------- * ---------- //

let number = 1;

while (number <= 42) {
  console.log(lib.nth_fibonacci(number));
  number++;
}
