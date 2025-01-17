export default function caesarChiper(message, offset, show = false) {
  const alphabhet = "abcdefghijklmnopqrstuvwxyz";
  let encrypt_text = "";

  for (const char of message.toLocaleLowerCase()) {
    if (char === " ") {
      encrypt_text += char;
    } else {
      const index = alphabhet.indexOf(char);
      const new_index = (index + offset) % alphabhet.length;
      encrypt_text += alphabhet[new_index];
    }
  }
  if (show) console.log(encrypt_text);
  return encrypt_text;
}
