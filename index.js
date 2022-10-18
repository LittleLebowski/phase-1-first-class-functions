const greet = function () {
  console.log("Welcome to GeeksforGeeks!");
};

const receivesAFunction = (callback) => {
  callback();
};

function returnsANamedFunction() {
  return namedFunc;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Stretch! Work that core!");
  };
}

function namedFunc() {
  return "name";
}

console.log(returnsANamedFunction());
console.log(namedFunc());
