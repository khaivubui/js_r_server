function nthFibonacci(n) {
  if (n < 2) return 1;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

let index = 0;

while (index <= 42) {
  console.log(nthFibonacci(index));
  index++;
}
