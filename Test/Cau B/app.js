let hexColor = document.querySelector("#hexColor");
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(typeof(color));
    hexColor.innerHTML= color;
    return color;
}

function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
};

document.querySelector('#copyColor').addEventListener('click', copy);
async function copy() {
    let text = document.querySelector("#hexColor").innerText;
    await navigator.clipboard.writeText(text);
}
