const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect(sum(1000000000,2000000000)).toBe(3000000000);
  });

  test('can add two negative numbers', () => {
    expect(sum(-10,-30)).toBe(-40);
  });

  test('can add zero', () => {
    expect(sum(43,0)).toBe(43);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expect(subtract(32,8)).toBe(24);
  });

  test('can subtract two large positive numbers', () => { 
    expect(subtract(1000000000,2000000000)).toBe(-1000000000);
  });

  test('can subtract one negative number, and one positive number', () => {
    expect(subtract(26,-30)).toBe(56);
  });

  test('can subtract zero', () => {
    expect(subtract(43,0)).toBe(43);
  });
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expect(multiply(9,8)).toBe(72);
  });

  test('can multiply two large positive numbers', () => { 
    expect(multiply(200000,400000)).toBe(80000000000);
  });

  test('can multiply one negative number, and one positive number', () => {
    expect(multiply(3,-6)).toBe(-18);
  });
  
  test('can multiply whole number, and one fraction number', () => {
    expect(multiply(26,0.5)).toBe(13);
  });

  test('can multiply by zero', () => {
    expect(multiply(43,0)).toBe(0);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expect(divide(9,3)).toBe(3);
  });

  test('can divide two large positive numbers', () => { 
    expect(divide(200000,2000)).toBe(100);
  });

  test('can divide one negative number, and one positive number', () => {
    expect(divide(18,-6)).toBe(-3);
  });
  
  test('can divide whole number, and one fraction number', () => {
    expect(divide(26,0.5)).toBe(52);
  });

  test('can not divide by zero', () => {
    expect(divide(43,0)).toBe(Infinity); //I don't really like that, but I guess that's just a JS thing
  });
});

describe('modulus', () => {
  test('can modulus two small positive numbers', () => {
    expect(modulus(9,3)).toBe(0);
  });

  test('can modulus two large positive numbers', () => { 
    expect(modulus(200004,2000)).toBe(4);
  });

  test('can modulus one negative number, and one positive number', () => {
    expect(modulus(19,-6)).toBe(1);
  });
  
  test('cannot modulus a whole number, and one fraction number', () => {
    expect(modulus(26,0.5)).toBe(0); //not sure I really like that you can do modulus a fraction
  });

  test('can modulus by zero', () => {
    expect(modulus(43,0)).toBe(NaN);
  });
});

describe('even', () => {
  test('can see a small number is even', () => {
    expect(even(4)).toBe(true);
  });

  test('can see a big number is even', () => {
    expect(even(345093849582)).toBe(true);
  });

  test("can see a small number isn't even", () =>{
    expect(even(3)).toBe(false);
  });

  test("can see a big number isn't even", () =>{
    expect(even(987359898234659)).toBe(false);
  });
});

describe('odd', () => {
  test("can see a small number isn't odd", () => {
    expect(odd(4)).toBe(false);
  });

  test("can see a big number isn't odd", () => {
    expect(odd(345093849582)).toBe(false);
  });

  test("can see a small number is odd", () =>{
    expect(odd(3)).toBe(true);
  });

  test("can see a big number is odd", () =>{
    expect(odd(987359898234659)).toBe(true);
  });
});
