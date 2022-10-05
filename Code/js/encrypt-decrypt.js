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



async function enc_dec(){
    var enc_dec_input = document.getElementById("enc_dec_input").value;
    if (document.getElementById("enc_dec_input").value.length == 0){
        alert("Enter input");

    }else{
        var final_output = "";
        var selected_option = document.getElementById("search_en_dec_type").value;
        if(selected_option == "tobase64"){
            a = CryptoJS.enc.Utf8.parse(enc_dec_input);
            final_output = CryptoJS.enc.Base64.stringify(a);
            console.log(final_output);
        }else if (selected_option == "frombase64"){
            a = CryptoJS.enc.Base64.parse(enc_dec_input);
            final_output = a.toString(CryptoJS.enc.Utf8);
        }
        else if (selected_option == "tomd5"){
            a = enc_dec_input.replace(/\s+/g, '');
            final_output = CryptoJS.MD5(a).toString();
            
        }

        document.getElementById("enc_dec_output").innerText = "\nOutput is : " + final_output +"\n";
    }
}


