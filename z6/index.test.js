const sumOfNumbers = require('./index');

test('Hello', function (){
  expect(sumOfNumbers([])).toBe('пустой массив, нечего подсчитывать')
})