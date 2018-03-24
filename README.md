# Using Rust with JavaScript (NodeJS) Server Side

## Setup

1. `npm install`
2. `cd rust_fibonacci/ && cargo build --release && cd ..`

## Running Benchmarks

#### Rust

- Rust benchmark code is stored in `rust_fibonacci/src/main.rs`
- Run Rust benchmark with `time rust_fibonacci/target/release/rust_fibonacci`

#### JavaScript

- JavaScript benchmark code is stored in `javascript_fibonacci/index.js`
- Run JavaScript benchmark with `time node javascript_fibonacci/`

#### JavaScript with Rust

- JavaScript with Rust benchmark code is stored in `javascript_with_rust_fibonacci/index.js`
- Run JavaScript benchmark with `time node javascript_with_rust_fibonacci/`
