import capitalize from "../src/capitalize.js";

test.each([
  ["john", "John"],
  ["anDy", "AnDy"],
  ["Bob", "Bob"],
])('Capitalizes "%s" to "%s"', (str, capStr) => {
  expect(capitalize(str)).toBe(capStr);
});

describe("Only accepts strings", () => {
  test.each([
    [undefined],
    [null],
    [NaN],
    [1],
    [0],
    [Infinity],
    [{ a: 1, b: 2 }],
    [
      () => {
        "hello-world";
      },
    ],
  ])("Errors when passed %p", (value) => {
    expect(() => capitalize(value)).toThrow();
  });
});
