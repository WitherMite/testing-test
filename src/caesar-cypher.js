// alphabet character codes:
// A-Z : 65-90, a-z : 97-122
const minUpperCode = 65;
const maxUpperCode = 90;
const minLowerCode = 97;
const maxLowerCode = 122;

function shiftCharacter(charCode, shift) {
  const isLowerCase = charCode >= minLowerCode && charCode <= maxLowerCode;
  const isUpperCase = charCode >= minUpperCode && charCode <= maxUpperCode;
  if (!(isUpperCase || isLowerCase)) return String.fromCharCode(charCode);

  // mod to simplify shifting, since it loops every 26 letters
  let shiftCode = charCode + (shift % 26);

  // handle non overlapping wrap cases
  if (shiftCode < minUpperCode) shiftCode += 26;
  if (shiftCode > maxLowerCode) shiftCode -= 26;

  // handle overlapping wrap cases
  if (isUpperCase && shiftCode > maxUpperCode) shiftCode -= 26;
  if (isLowerCase && shiftCode < minLowerCode) shiftCode += 26;

  return String.fromCharCode(shiftCode);
}

export default function caesarCypher(string, shift = 3) {
  if (typeof string !== "string")
    throw new Error("Argument is not valid string", { cause: string });
  let cypher = "";
  for (let i = 0; i < string.length; i++) {
    cypher += shiftCharacter(string.charCodeAt(i), shift);
  }
  return cypher;
}
