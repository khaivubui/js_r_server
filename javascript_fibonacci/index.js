const nthFibonacci = (num) => {
  if (num < 2) return num;
  return nthFibonacci(num - 1) + nthFibonacci(num - 2);
};

let number = 1;

while (number <= 42) {
  console.log(nthFibonacci(number));
  number++;
}
