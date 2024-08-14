export default function analyzeArray(arr) {
  if (!Array.isArray(arr))
    throw new Error("Argument is not valid array", { cause: arr });
  return {
    length: arr.length,
    max: getMax(arr),
    min: getMin(arr),
    average: getAverage(arr),
  };
}

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function getAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}
