const Swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return a + " " + b;
};

console.log(Swap(4, 5));

const Swap2 = (a, b) => {
  [a, b] = [b, a];
  return a + " " + b;
};

console.log(Swap2(10, 22));

//Javascript program to swap two variables without using third variable

const Swap3 = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return a + " " + b;
};

console.log(Swap3(8, 9));

//Using XOR Operator

const Swap4 = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return a + " " + b;
};

console.log(Swap4(11, 22));
