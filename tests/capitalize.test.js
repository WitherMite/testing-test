import capitalize from "../src/capitalize.js";

test('Capitalizes "john"', () => {
  expect(capitalize("john")).toBe("John");
});
