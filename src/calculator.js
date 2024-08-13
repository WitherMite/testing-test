const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => {
    if (y === 0) throw new Error("Divide by 0 error");
    return x / y;
  },
};
export default calculator;
