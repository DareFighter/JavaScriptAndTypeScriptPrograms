const union = (a, b) => {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }

  return unionSet;
};

const intersection = (a, b) => {
  let intersectionSet = new Set();

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }

  return intersectionSet;
};

const setA = new Set(["apple", "mango", "orange"]);
const setB = new Set(["grapes", "apple", "banana"]);

const result = intersection(setA, setB);
console.log(result);
