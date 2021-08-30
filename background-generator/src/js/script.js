var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");
let copyBtn = document.getElementById('copy')
let resultText = document.getElementById('colorResult');
let direction = document.getElementById('direction');
let gradientStyle = document.getElementById('styler');
let dir = '';
let gStyle = '';

body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
resultText.value = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function setGradient() {
    body.style.background =`linear-gradient(to right, ${color1.value}, ${color2.value})`;
    resultText.value = body.style.background + ";";
}

function randomPick() {
    let r1 = '';
    let r2 = '';
    let choices = 'abcdef0123456789';
    for (let i = 0; i < 6; i++) {
        r1 += choices.charAt(Math.floor(Math.random() * choices.length));
        r2 += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    
    body.style.background = `linear-gradient(to right, #${r1}, #${r2})`;
    color1.value = `#${r1}`;
    color2.value = `#${r2}`;
    resultText.value = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    gradientStyle.selectedIndex = 0;
    direction.selectedIndex = 0;
}

function copyText() {
    resultText.select();
    resultText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultText.value)
}

function chooseDirection() {
    dir = direction.value;
    body.style.background = `linear-gradient(${dir}, ${color1.value}, ${color2.value})`;
    resultText.value = `linear-gradient(${dir}, ${color1.value}, ${color2.value})`;
}

function styleSelect() {
    gStyle = gradientStyle.value;
    body.style.background = `${gStyle}( ${color1.value}, ${color2.value})`;
    resultText.value = `${gStyle}(${color1.value}, ${color2.value})`;
}

direction.addEventListener('change', chooseDirection)
gradientStyle.addEventListener('change', styleSelect)
copyBtn.addEventListener('click', copyText);
btn.addEventListener("click", randomPick);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

    
