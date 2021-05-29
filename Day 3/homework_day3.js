//1
let items = [`Jeans`, `T-Shirt`, `Socks`];
while (true) {
    let menu = prompt(`Hi there, welcome to shop admin panel, what do you want (C, R, U, D) ? / Press any key and enter to log out`);
    if (menu == `R`) {
        alert(`The current items are: ${items}`);
        console.log(items);
    }
    else if (menu == `C`) {
        let newItem = prompt(`Enter the name of the new item: `);
        items.push(newItem);
        alert(`Done`);
    }
    else if (menu == `U`) {
        let i = Number(prompt(`Enter the position you want to update: `));
        items[i] = prompt(`Enter the new name: `);
        alert(`Done`);
    }
    else if (menu == `D`) {
        let i = Number(prompt(`Enter the position you want to delete: `));
        items.splice(i, 1);
        alert(`Done`);
    }
    else {
        alert(`Logged out the program !`);
        break;
    }
}
//2.1
let arr = [3, 4, 6, -9, 10, -88, 2];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);
//2.2
let arr = [3, 4, 6, -9, 10, -88, 2];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        arr.splice(i, 1);
    }
}
console.log(arr);
console.log(`So cac so duong la: ${arr.length}`);
//2.3
let j = 0
let arr = [3, 4, 6, -9, 10, -88, 2];
let inputNumber = Number(prompt(`Enter a number:`));
for (let i = 0; i < arr.length; i++) {
    if (inputNumber == arr[i]) {
        alert(`${inputNumber} is FOUND in my array at index ${i}`);
        j++;
    }
}
if (j == 0) {
    alert(`${inputNumber} is NOT FOUND in my array`);
}
//3
let inputStr = prompt(`Nhap cac so:`);
let newArr = inputStr.split(' ');
console.log(newArr);
alert(`Mang da nhap: ${newArr}`);
//4
let str = prompt(`Enter a sequence of numbers, separated by ","`);
let arr = str.split(',').map(Number);
let minimum = Math.min.apply(Math, arr);
console.log(arr);
alert(`The smallest number is ${minimum}`);
//5
let studentNames = prompt(`Nhap danh sach:`);
let arrNames = studentNames.split(',');
let upperNames = arrNames.map(function (name) {
    return name.toUpperCase();
});
alert(upperNames);
//6
let numbers = prompt(`Nhap day so:`);
let arrNumbers = numbers.split(',').map(Number);
console.log(arrNumbers);
for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 2 == 1) {
        arrNumbers.splice(i, 1);
    }
}
alert(arrNumbers);