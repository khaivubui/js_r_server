# Using Rust with JavaScript (NodeJS) Server Side

## Setup

`npm install && cd rust_fibonacci/ && cargo build --release && cd ..`

## Running Benchmarks

#### JavaScript

```javascript
function nthFibonacci(num) {
  if (num < 2) return num;
  return nthFibonacci(num - 1) + nthFibonacci(num - 2);
};

let number = 1;

while (number <= 42) {
  console.log(nthFibonacci(number));
  number++;
}
```

- JavaScript benchmark code is stored in `javascript_fibonacci/index.js`
- Run JavaScript benchmark with `time node javascript_fibonacci/`

#### Rust

```rust
fn nth_fibonacci(num: i32) -> i32 {
  if num < 2 { return num; }
  nth_fibonacci(num - 1) + nth_fibonacci(num - 2)
}

fn main() {
  let mut number = 1;

  loop {
    println!("{}", nth_fibonacci(number));
    number += 1;
    if number > 42 { break; }
  }
}
```

- Rust benchmark code is stored in `rust_fibonacci/src/main.rs`
- Run Rust benchmark with `time rust_fibonacci/target/release/rust_fibonacci`

#### JavaScript with Rust

```javascript
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
```

- JavaScript with Rust benchmark code is stored in `javascript_with_rust_fibonacci/index.js`
- Run JavaScript benchmark with `time node javascript_with_rust_fibonacci/`
