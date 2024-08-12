import sayHi from "./main.js";

test("Says hello", () => {
  expect(sayHi()).toBe("hello world");
});
