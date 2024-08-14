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

test("Default shift is three", () => {
  expect(caesarCypher("abc")).toBe("def");
});

describe("Wrap shifts from a to z", () => {
  test.each([
    ["abc", -3, "xyz"],
    ["hello", 22, "dahhk"],
    ["nfn", -17, "wow"],
  ])("Shifts %s %s letters to %s", (string, shift, cypher) => {
    expect(caesarCypher(string, shift)).toBe(cypher);
  });
});

describe("Preserve capitials", () => {
  test.each([
    ["DEF", "ABC", 3],
    ["OlSSv", "HeLLo", 7],
    ["Huh", "Bob", 6],
  ])("%s keeps capitals from %s", (cypher, string, shift) => {
    expect(caesarCypher(string, shift)).toBe(cypher);
  });
});

describe("Preserve punctuation", () => {
  test.each([
    ["D,E.F", "A,B.C", 3],
    ["/OlS?Sv", "/HeL?Lo", 7],
    ["Huh!", "Bob!", 6],
  ])("%s keeps punctuation from %s", (cypher, string, shift) => {
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
    [[1, 2, 3]],
  ])("Errors when passed %p", (value) => {
    expect(() => caesarCypher(value)).toThrow();
  });
});
