const ffi = require('ffi');
const path = require('path');

const lib = ffi.Library(
  path.join(__dirname, '../rust_fibonacci/target/release/libfibonacci.dylib'),
  {
    nth_fibonacci: ['int', ['int']]
  }
);

// ---------- * ---------- * ---------- * ---------- //

let index = 0;

while (index <= 42) {
  console.log(lib.nth_fibonacci(index));
  index++;
}
