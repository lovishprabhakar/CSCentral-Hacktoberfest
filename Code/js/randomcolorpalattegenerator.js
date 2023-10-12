const container = document.querySelector('.container2');
const button = document.querySelector('.button');

button.addEventListener('click', addColor);

for (let i = 1; i <= 5; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

const colorBlocks = document.querySelectorAll('.box');

function randomHexColorCode() {
  let chars = '0123456789abcdef';
  let colorLength = 6;
  let color = '';

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  let generatedColor = `#${color}`;
  return generatedColor;
}

function addColor() {
  colorBlocks.forEach((colorBlock) => {
    let newColor = randomHexColorCode();
    colorBlock.style.backgroundColor = newColor;
    colorBlock.textContent = newColor;

    colorBlock.addEventListener('click', () => {
      let range = document.createRange();
      range.selectNode(colorBlock);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      alert('Copied!');
      window.getSelection().removeAllRanges();
    });
  });
}
