var input_text = document.querySelector("#input_text");
var generate_qr = document.querySelector("#generate_qr");
var result = document.querySelector("#result");
var downloadBtn = document.querySelector("#downloadBtn");

generate_qr.addEventListener("click", newQRFun);

function newQRFun() {
    if (input_text.value != "") {
        if (result.childElementCount == 0) {
            generate(input_text);
        } else {
            result.innerHTML = "";
            generate(input_text);
        }
    } else {
        console.log("not valid input");
        result.style = "display: none";
    }
}

function generate(user_input) {
    if (downloadBtn.childNodes.length == 1) {
        downloadBtn.removeChild(downloadBtn.firstElementChild);
    }
    result.style = "";

    var qrcode = new QRCode(result, {
        text: `${user_input.value}`,
        width: 180, //128
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code.png");
    download_link.setAttribute("class", "btn btn-danger text-center");
    download_link.innerText = "Download";

    downloadBtn.appendChild(download_link);

    let qr_code_canvas = document.querySelector("canvas");

    if (result.getAttribute("src") == null) {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${result.getAttribute("src")}`);
        }, 300);
    }
}