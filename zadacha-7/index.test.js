const myFunction = require('./index')

test("bad description of test", function() {
  expect(myFunction("hello")).toBe("olleh");

  expect(myFunction("")).toBe("");

  expect(myFunction(1234)).toBeUndefined();

  expect(myFunction()).toBeUndefined();
});