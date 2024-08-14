export default function analyzeArray(arr) {
  if (!Array.isArray(arr))
    throw new Error("Argument is not valid array", { cause: arr });
  return {};
}
