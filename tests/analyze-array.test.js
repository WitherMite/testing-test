import analyzeArray from "../src/analyze-array.js";

test("Outputs an object", () => {
  const result = analyzeArray([]);
  const isObj = result && !Array.isArray(result) && typeof result === "object";
  expect(isObj).toBe(true);
});

describe("Object has specified properties", () => {
  const resultOne = analyzeArray([69]);
  const resultTwo = analyzeArray([1, 2, 3, 4, 5]);
  const resultThree = analyzeArray([-4, 56, 12, 100, 0, 4]);

  test.each([
    ["average", 69, 3, 28],
    ["min", 69, 1, -4],
    ["max", 69, 5, 100],
    ["length", 1, 5, 6],
  ])("Object has correct %s property", (property, val1, val2, val3) => {
    expect(resultOne[property]).toBe(val1);
    expect(resultTwo[property]).toBe(val2);
    expect(resultThree[property]).toBe(val3);
  });
});

describe("Only accepts arrays", () => {
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
    ["hi"],
  ])("Errors when passed %p", (value) => {
    expect(() => caesarCypher(value)).toThrow();
  });
});

describe("Only accepts arrays of numbers", () => {
  test.each([
    [[]],
    [[NaN, 1, 2, 3]],
    [["hello", "world"]],
    [[null, true, false]],
    [[[], {}, () => "foo"]],
  ])("Errors when passed %p", (value) => {
    expect(() => caesarCypher(value)).toThrow();
  });
});
