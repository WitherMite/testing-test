// alphabet character codes:
// A-Z : 65-90, a-z : 97-122
const minUpperCode = 65;
const maxUpperCode = 90;
const minLowerCode = 97;
const maxLowerCode = 122;

function shiftCharacter(charCode, shift) {
  const isLowerCase = charCode >= minLowerCode && charCode <= maxLowerCode;
  // simplify shifting, since it loops every 26 letters
  shift = shift % 26;
  let shiftCode = charCode + shift;

  // handle non overlapping wrap cases
  if (shiftCode < minUpperCode) shiftCode += 26;
  if (shiftCode > maxLowerCode) shiftCode -= 26;

  // handle overlapping wrap cases
  if (shiftCode > maxUpperCode && !isLowerCase) shiftCode -= 26;
  if (shiftCode < minLowerCode && isLowerCase) shiftCode += 26;

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
