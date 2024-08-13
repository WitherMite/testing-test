import caesarCypher from "../src/caesar-cypher.js";

describe("Shifts letters", () => {
  test.each([
    ["abc", 3, "def"],
    ["hello", 7, "olssv"],
    ["xyz", -2, "vwx"],
    ["bob", 6, "huh"],
  ])("Shifts %s %s letters to %s", (string, shift, cypher) => {
    expect(caesarCypher(string, shift)).toBe(cypher);
  });
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
    expect(() => caesarCypher(value)).toThrow();
  });
});
