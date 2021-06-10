let printButton = document.getElementById(`upper-button`);
console.log(printButton);
printButton.addEventListener('click', function(e) {console.log(`Button just clicked!`)});
let printInput = document.getElementById(`name-input`);
console.log(printInput);
let printParagraph = document.getElementById(`line`);
console.log(printParagraph);
function getInputValue(){
    let inputValue = document.getElementById('name-input').value;
    console.log(`User's name: ${inputValue}`);
    let inputUpper = inputValue.toUpperCase();
    console.log(`User's name uppercase: ${inputUpper}`);
    printParagraph.innerHTML = inputUpper;
}