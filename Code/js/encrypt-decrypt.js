const cipher = (salt) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) =>
        textToChars(salt).reduce((a, b) => a ^ b, code);

    return (text) =>
        text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decipher = (salt) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) =>
        textToChars(salt).reduce((a, b) => a ^ b, code);
    return (encoded) =>
        encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};

// To create a cipher
const myCipher = cipher("mySecretSalt");
console.log(myCipher);

//Then cipher any text:
var enc = myCipher("Hi How are you?");
console.log(enc);

//To decipher, you need to create a decipher and use it:
const myDecipher = decipher("mySecretSalt");
console.log(myDecipher(enc));