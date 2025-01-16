function vigenereChiper(message, key, direction = 1) {
    let key_index = 0;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let final_message = '';

    for (let char of message) {
        if (alphabet.includes(char.toLowerCase())) {
            let lower_char = char.toLowerCase();
            let key_char = key[key_index % key.length].toLowerCase();
            key_index += 1;

            let offset = alphabet.indexOf(key_char);
            let index = alphabet.indexOf(lower_char);

            let new_index = (index + offset * direction) % alphabet.length;
            if (new_index < 0) {
                new_index += alphabet.length; 
            }

            if (char === char.toUpperCase()) {
                final_message += alphabet[new_index].toUpperCase();
            } else {
                final_message += alphabet[new_index];
            }
        } else {
            final_message += char;
        }
    }
    return final_message;
}

function VigenereEncrypt(message, key) {
    return vigenereChiper(message, key);
}

function VigenereDecrypt(message, key) {
    return vigenereChiper(message, key, -1); // Gunakan -1 untuk dekripsi
}

export { VigenereEncrypt, VigenereDecrypt };
