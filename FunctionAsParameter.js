function greet() {
  return `Hello`;
}

function name(user, func) {
  //accessing passed function
  const message = func();
  console.log(`${message} ${user}`);
}

name("shreyas", greet);
