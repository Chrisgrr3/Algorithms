function caesarCipherEncryptor(string, key) {
    let encrypted = "";
    let letter;
    key = key % 26;
    for(let i = 0; i < string.length; i++) {
        letter = string.charCodeAt(i);
        if(letter + key > 122) {
            let code = letter + key - 122;
            letter = 96 + code;
        }
        else {
            letter += key;
        }
        encrypted += String.fromCharCode(letter);
    }
    return encrypted;
}

console.log(caesarCipherEncryptor("wxyz", 1));