export default function reverse(str) {
  if (typeof str !== "string")
    throw new Error("Argument is not valid string", { cause: str });
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}
