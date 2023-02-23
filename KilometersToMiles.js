const KilometersToMiles = (km) => {
  const factor = 0.621371;
  const miles = km * factor;

  return `${km} kilometers is equalt to ${miles} miles.`;
};

console.log(KilometersToMiles(5));
