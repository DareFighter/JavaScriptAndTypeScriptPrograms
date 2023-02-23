const CelciusToFahrenheit = (celcius) => {
  let result = celcius * 1.8 + 32;
  return `Fahrenheit = ${result} degree`;
};

console.log(CelciusToFahrenheit(55));
