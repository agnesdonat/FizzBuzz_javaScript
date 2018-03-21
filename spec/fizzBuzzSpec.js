describe('FizzBuzz', function() {

  it('knows that multiples of 3 equals "Fizz" ', function(){
    var threeNumber = Math.floor(Math.random(1) * 100 ) * 3;
    expect(fizzBuzz.play(threeNumber)).toEqual('Fizz');
  });

  it('knows that multiples of 5 equals "Buzz"', function(){
    var fiveNumber = Math.floor(Math.random(1) * 100) * 5;
    expect(fizzBuzz.play(fiveNumber)).toEqual('Buzz');
  });

  it('knows the multiples of 15 equals "FizzBuzz"', function() {
    var fifteenNumber = Math.floor(Math.random(1) * 100) * 15;
    expect(fizzBuzz.play(fifteenNumber)).toEqual('FizzBuzz');
  });

  it('prints the number', function() {
    var number = 4;
    expect(fizzBuzz.play(number)).toEqual(number);
  });

});
