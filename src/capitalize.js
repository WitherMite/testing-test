export default function capitalize(str) {
  if (!(typeof str === "string"))
    throw new Error("Argument is not a valid string");
  const strArr = str.split("");
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join("");
}
