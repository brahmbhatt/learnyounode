let sum = require('./baby-steps');
describe('the function prints sum for', ()=> {
  test('test case with three arguments as numbers', () => {
    expect(sum([1,2])).toBe(3);
  });
});
