let sum = require('./baby-steps');
describe('the function prints sum for', ()=> {
  test('test case with two arguments as numbers', () => {
    expect(sum([1,2])).toBe(3);
  });

  test('test case with two arguments as string', () => {
    expect(typeof(sum(['1','2']))).toBe('number');
  });

  test('test case with three arguments from which one is undefind', () => {
    expect(sum(['1',NaN,'2'])).toBe(NaN);
  });
});
