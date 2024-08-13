// character codes:
// a-z : 97-122, A-Z : 65-90

export default function caesarCypher(string, shift = 3) {
  if (typeof string !== "string")
    throw new Error("Argument is not valid string", { cause: string });

  let cypher = "";
  for (let i = 0; i < string.length; i++) {
    cypher += String.fromCharCode(string.charCodeAt(i) + shift);
  }
  return cypher;
}
