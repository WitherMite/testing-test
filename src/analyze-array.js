export default function analyzeArray(arr) {
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
