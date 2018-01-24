let fs = require('fs');
function countLines(path)
{
  let text = fs.readFileSync(path);
  return (text.toString().split('\n').length - 1);
}
module.exports = countLines;
