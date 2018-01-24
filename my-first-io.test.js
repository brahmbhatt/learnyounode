let countLines = require('./my-first-io');
let path = '/users/margibrahmbhatt/curry/list.txt';
let path1 = '/users/margibrahmbhatt/learnyounode/lines.txt';
describe('this problem counts number of lines for', () => {
  test('testcase for passing a file with 5 lines', () => {
    expect(countLines(path)).toBe(5);
  });

  test('testcase for passing an empty file', () => {
    expect(countLines(path1)).toBe(0);
  });
});
