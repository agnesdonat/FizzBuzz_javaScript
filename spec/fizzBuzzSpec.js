describe('FizzBuzz', function() {
  it('knows that multiples of 3 equals "Fizz" ', function(){
    var threeNumber = Math.floor(Math.random(1) * 100 ) * 3;
    expect(fizzBuzz.play(threeNumber)).toEqual('Fizz');
  });
  it('knows that multiples of 5 equals "Buzz"', function(){
    var fiveNumber = Math.floor(Math.random(1) * 100) * 5;
    expect(fizzBuzz.play(fiveNumber)).toEqual('Buzz');
  });
});
