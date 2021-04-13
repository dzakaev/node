const sumOfNumbers = require('./index')

test ('Проверка функциии', function (){
  expect(sumOfNumbers([5,6,7])).toBe(18)
});
