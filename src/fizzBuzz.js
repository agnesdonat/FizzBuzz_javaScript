function FizzBuzz() {}

FizzBuzz.prototype.play = function(number) {
  if (number % 3 === 0) {
    return 'Fizz';
  }
  if (number % 5 === 0) {
    return 'Buzz';
  }
}
let fizzBuzz = new FizzBuzz();
