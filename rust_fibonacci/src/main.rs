fn nth_fibonacci(n: i32) -> i32 {
    if n < 2 { return 1; }
    nth_fibonacci(n - 1) + nth_fibonacci(n - 2)
}

fn main() {
    let mut index = 0;

    loop {
        if index > 42 { break; }
        println!("{}", nth_fibonacci(index));
        index += 1;
    }
}
