import {
  VigenereDecrypt,
  VigenereEncrypt,
} from "../../other/h-tools/cryptographic/vigenere-chiper.js";

let message = "audzubilla himinas viko nirrojim";
let key = "laptopmajapahit";
let wrongKey = "laptopgaming";

console.log("\nkey       : ", key);
console.log("plain msg : ", message);

// Encrypt message using vigenere chiper
let encryptedMessage = VigenereEncrypt(message, key);
console.log("\nEncrypted message                  :", encryptedMessage);

// Decyrpt message using vigenere chiper and correct key | same key for usign encryption
let decryptedMessage = VigenereDecrypt(encryptedMessage, key);
console.log("Decrypted message with correct key :", decryptedMessage);

// Decrypt encrypted message with wrong key
let decryptedMessageWithWrongKey = VigenereDecrypt(encryptedMessage, wrongKey);
console.log(
  "Decrypted message with wrong key   :",
  decryptedMessageWithWrongKey,
);
