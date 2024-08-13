import calculator from "../src/calculator.js";

test.each([
  [1, 1, 2],
  [100, -20, 80],
  [-200, -30, -230],
])("Adds numbers", (x, y, ans) => {
  expect(calculator.add(x, y)).toBe(ans);
});

test.each([
  [1, 1, 0],
  [40, 20, 20],
  [-20, 20, -40],
])("Subtracts numbers", (x, y, ans) => {
  expect(calculator.subtract(x, y)).toBe(ans);
});

test.each([
  [1, 1, 1],
  [20, 5, 100],
  [30, -2, -60],
])("Multiplies numbers", (x, y, ans) => {
  expect(calculator.multiply(x, y)).toBe(ans);
});

test.each([
  [1, 1, 1],
  [40, 2, 20],
  [500, -20, -25],
])("Divides numbers", (x, y, ans) => {
  expect(calculator.divide(x, y)).toBe(ans);
});

test("Errors when 0 is divisor", () => {
  expect(() => calculator.divide(1337, 0)).toThrow();
});
