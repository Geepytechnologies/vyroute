// myFunction.js
function myFunction(a, b) {
  return a + b;
}

// myFunction.test.js
test("adds 1 + 2 to equal 3", () => {
  expect(myFunction(1, 2)).toBe(3);
});
