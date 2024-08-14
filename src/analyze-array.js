export default function analyzeArray(arr) {
  if (isInvalidNumberArray(arr))
    throw new Error("Array is not valid array of numbers", { cause: arr });
  return {
    length: arr.length,
    max: getExtreme(arr, (a, b) => a > b),
    min: getExtreme(arr, (a, b) => a < b),
    average: getAverage(arr),
  };
}

function getExtreme(arr, boolCond) {
  let extreme = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (boolCond(arr[i], extreme)) extreme = arr[i];
  }
  return extreme;
}

function getAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

function isInvalidNumberArray(arr) {
  return (
    !Array.isArray(arr) ||
    arr.length < 1 ||
    arr.some((val) => typeof val !== "number" || Number.isNaN(val))
  );
}
