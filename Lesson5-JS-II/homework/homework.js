// Do not change any of the function names

function multiplyArguments() {

  var product = 1;

  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  }

  for (var i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}

// use the arguments keyword to multiply all of the arguments together and return the product
// if no arguments are passed in return 0
// if one argument is passed in just return it

function getBiggest(x, y) {
  var greaterList = [x, y];
  var sortedList = greaterList.sort();
  return sortedList[0];
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  if (Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime
};
