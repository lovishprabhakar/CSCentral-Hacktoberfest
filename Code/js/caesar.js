// this is used in caeser shifting card

let message_textarea = document.querySelector("#enc_message");
let shift_textarea = document.querySelector("#shift_key");
let encrypt_btn = document.querySelector("#encrypt");
let decrypt_btn = document.querySelector("#decrypt");
let output_textarea = document.querySelector("#enc_output");

// javascript modulo bug fix
function mod(n, m) {
    return ((n % m) + m) % m;
}

function shiftChar(char, shift) {
    let code = char.charCodeAt();
    // upper case
    if (code >= 65 && code <= 90) {
        char = String.fromCharCode(mod(code - 65 + shift, 26) + 65);
    }
    // lower case 
    else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(mod(code - 97 + shift, 26) + 97);
    }
    return char;
}

function shiftMessage(message,shift) {
    let output = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-zA-Z]/i)) {
            output += shiftChar(char, shift);
        } else {
            // if char is not a letter then append it as is
            output += char;
        }
    }
    return output;
}

function handleEvent(isDecrypt) {
    let message = message_textarea.value;
    message = message.trim()
    let shift = parseInt(shift_textarea.value);
    if(isNaN(shift)){
        alert("Shift key must be a number")
        return;
    }
    if (isDecrypt) {
        shift = -1*shift;
    }
    let output = shiftMessage(message, shift);
    output_textarea.value = output;
}

function handleDecrypt() {
    handleEvent(true);
}

function handleEncrypt() {
    handleEvent(false);
}

encrypt_btn.addEventListener("click", handleEncrypt);
decrypt_btn.addEventListener("click", handleDecrypt);