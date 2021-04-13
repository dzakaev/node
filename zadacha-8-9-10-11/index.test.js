


test('Правильность написания функции', function () {
  expect(add([1,2,3,4])).toBe([1])
})

test('Правильность написания функции', function () {
  expect(add(['Vishan', 'Usman', 'Adam'])).toBe(['Adam'])
})

test('Правильность написания функции', function () {
  expect(add([6,3,9,1,7,5,])).toEqual([1,3,5,6,7,9])
})

test('Правильность написания функции', function () {
  expect(add([1, -2, 3, -4, 5])).toEqual([-2, -4])
})