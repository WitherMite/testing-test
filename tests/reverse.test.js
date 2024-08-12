import reverse from "../src/reverse.js";

test.each([
  ["hello", "olleh"],
  ["world", "dlrow"],
  ["tacocat", "tacocat"],
])('Reverses "%s" to "%s"', (str, reverseStr) => {
  expect(reverse(str)).toBe(reverseStr);
});

describe("Only accepts strings", () => {
  test.each([
    [undefined],
    [null],
    [NaN],
    [true],
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
    expect(() => reverse(value)).toThrow();
  });
});
