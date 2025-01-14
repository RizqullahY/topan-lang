// node __test__/h-tools/vigenereChiper.js
import {VigenereDecrypt, VigenereEncrypt} from "../../lib/h-tools/cryptographic/vigenere-chiper.js";


let message = 'audzubilla himinas viko nirrojim';
let key = 'laptopmajapahit'

// encrypt message using vigenere

console.log()
console.log('key       : ', key)
console.log('plain msg : ' ,message)