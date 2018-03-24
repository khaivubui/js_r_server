# Using Rust with JavaScript (NodeJS) Server Side

## Running Benchmarks

#### Rust

- Rust benchmark code is stored in `rust_fibonacci/src/main.rs`
- Need to compile Rust code before running
  - `cd rust_fibonacci/ && cargo build --release && cd ..`
- Run Rust benchmark with `time rust_fibonacci/target/release/rust_fibonacci`

#### JavaScript

- JavaScript benchmark code is stored in `javascript_fibonacci/fibonacci.js`
- Run JavaScript benchmark with `time node javascript_fibonacci/fibonacci.js`
