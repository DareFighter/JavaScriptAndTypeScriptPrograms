const QuadraticEquation = (a, b, c) => {
  let discriminant = b * b - 4 * a * c;
  let root1, root2;
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return `The roots of quadratic equation are ${root1} and ${root2}`;
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    return `The roots of quadratic equation are ${root1} and ${root2}`;
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imgPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    return `The roots of quadratic equation are ${realPart} + ${imgPart}i and ${realPart} - ${imgPart}i`;
  }
};

let result = QuadraticEquation(2, 3, 4);
console.log(result);
