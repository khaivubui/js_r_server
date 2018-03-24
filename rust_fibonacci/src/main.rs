fn nth_fibonacci(num: i32) -> i32 {
    if num < 2 { return num; }
    nth_fibonacci(num - 1) + nth_fibonacci(num - 2)
}

fn main() {
    let mut number = 1;

    loop {
        println!("{}", nth_fibonacci(number));
        number += 1;
        if number > 40 { break; }
    }
}
