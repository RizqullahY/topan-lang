function vigenereChiper(message, key, direction = 1) {
    let key_index = 0;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let final_message = '';
    for (let char of message.toLowerCase()) {
        if (!alphabet.includes(char)) {
            final_message += char;
        } else {
            let key_char = key[key_index % key.length];
            key_index += 1;
            let offset = alphabet.indexOf(key_char);
            let index = alphabet.indexOf(char);
            let new_index = (index + offset * direction) % alphabet.length;
            final_message += alphabet[new_index];
        }
    }
    return final_message;
}

function VigenereEncrypt(message, key) {
    return vigenereChiper(message, key);
}

function VigenereDecrypt(message, key) {
    return vigenereChiper(message, key, -1);
}

export { VigenereEncrypt, VigenereDecrypt };
