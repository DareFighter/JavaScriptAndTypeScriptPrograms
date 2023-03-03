const CheckArray = (arrOrObject) => {
  if (Array.isArray(arrOrObject)) {
    return `Array`;
  } else {
    return `Not Array`;
  }
};

const arrOrObject = [1, 2, 3, 4];
const Object = {
  name: "name",
  value: "value",
};
console.log(CheckArray(Object));
