var input_text = document.querySelector('#input_text');
var generate_qr = document.querySelector('#generate_qr');
var result = document.querySelector('#result');
var downloadBtn = document.querySelector('#downloadBtn');
var size = document.getElementById('size');
var qr_img = document.querySelector("#qr_img"); 
var color = document.getElementById('color');

generate_qr.addEventListener('click', newQRFun);

function newQRFun() {
  if (input_text.value != '') {
    if (result.childElementCount == 0) {
      generate(input_text);
    } else {
      result.innerHTML = '';
      generate(input_text);
    }
  } else {
    console.log('not valid input');
    result.style = 'display: none';
  }
}

let sizes = size.value;
size.addEventListener('change', (e) => {
  sizes = e.target.value;
  isEmpty();
});


let colors = color.value;
color.addEventListener('change', (e) => {
  colors = e.target.value;
  isEmpty();
});

function generate(user_input) {
  if (downloadBtn.childNodes.length == 1) {
    downloadBtn.removeChild(downloadBtn.firstElementChild);
  }
  result.style = '';

  var qrcode = new QRious({
    element: document.querySelector("#result"),
    size: sizes,
    value: `${user_input.value}`,
    
      // background: "#123456",
      // backgroundAlpha: 0.7,
      foreground: colors,
      foregroundAlpha: 1, 
      // padding: 20, 
      // level: "H",
    
  });

  var qrcodeURL = qrcode.toDataURL();
  if(qrcode) {
   // console.log((qrcodeURL))
    var image = document.createElement("img");
    image.id = "id";
    image.className = "class";
    image.src = qrcodeURL;            // image.src = "IMAGE URL/PATH"
    result.appendChild(image);
  }

  let download_link = document.createElement('a');
  download_link.setAttribute('download', 'qr_code.png');
  download_link.setAttribute('class', 'btn btn-danger text-center');
  download_link.setAttribute("href", qrcodeURL)
  download_link.innerText = 'Download';

  downloadBtn.appendChild(download_link);

  let qr_code_canvas = document.querySelector('canvas');

  if (result.getAttribute('src') == null) {
    setTimeout(() => {
      download_link.setAttribute('href', `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute('href', `${result.getAttribute('src')}`);
    }, 300);
  }
}
