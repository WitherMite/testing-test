import analyzeArray from "../src/analyze-array.js";

test("Outputs an object", () => {
  const result = analyzeArray([]);
  const isObj = result && !Array.isArray(result) && typeof result === "object";
  expect(isObj).toBe(true);
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
