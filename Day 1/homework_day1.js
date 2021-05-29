// //1.1
// let message = `Coding is great`
// console.log(message)
// //1.2
// let studentCount = 22
// Number(studentCount)
// console.log(studentCount)
// //1.2
// let lowerMessage = message.toLowerCase()
// console.log(lowerMessage)
// //1.3
// console.log(studentCount + 1)
// //2
// alert(`Ngày hôm nay đẹp quá`)
// //3
// let lastName = prompt(`Họ của bạn là gì ?`)
// let Name = prompt(`Tên của bạn là gì ? `)
// alert(`Xin chào ${lastName} ${Name}`)
// //4
// let recLength = prompt(`Chiều dài HCN là :`)
// let recWidth = prompt(`Chiều rộng HCN là :`)
// Number(recLength, recWidth)
// alert(`Diện tích HCN là ${recLength*recWidth}`)

// let nGiaiThua = prompt(`Enter a number:`)
// let nGiaiThua2 = nGiaiThua
// for(var i = nGiaiThua2 - 1; i >=1; i--){
//     nGiaiThua2 *= i
// }
// alert(`The factorial of ${nGiaiThua} is ${nGiaiThua2}`)

// 
// x = prompt(`x =`)
// Number(x)
// mod = x % 2
// console.log(mod)
// if (mod == 0) {
//     alert(`${x} is even number`)
// }
// else if (mod == 1) {
//     alert(`${x} is odd number`)
// }
// else {
//     alert('x is not Natural Number')
// }
// let inputStr = prompt(`Nhap cac so:`);
// let newArr = inputStr.split(' ').map(Number);
// console.log(newArr);
// alert(`Mang da nhap: ${newArr}`);
// let arr = [3, 4, 6, -9, 10, -88, 2];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);
// console.log(`So cac so duong la: ${arr.length}`);
// let j = 0
// let arr = [3, 4, 6, -9, 10, -88, 2];
// let inputNumber = Number(prompt(`Enter a number:`));
// for (let i = 0; i < arr.length; i++) {
//     if (inputNumber == arr[i]) {
//         alert(`${inputNumber} is FOUND in my array at index ${i}`);
//         j++;
//     }
// }
// if (j == 0) {
//     alert(`${inputNumber} is NOT FOUND in my array`);
// }
let dateString = prompt(`Input string is a valid date formatted as "dd/mm/yyyy":`);
while (true) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
        alert(`Wrong date format, please input again!`);
        break;
    }
    let parts = dateString.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    if (year < 1000 || year >= 10000 || month == 0 || month > 12) {
        alert(`Wrong date format, please input again!`)
        break;
    }
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }
    if (!(day > 0 && day <= monthLength[month - 1])) {
        alert(`Invalid Date!`)
        break;
    }
    else {
        alert(`Valid Date`)
        let nextDay;
        let nextMonth;
        let nextYear;
        if (day == monthLength[month - 1]) {
            nextDay = 1;
            if (month == 12) {
                nextMonth = 1;
                nextYear = year + 1
            }
            else {
                nextMonth = month + 1;
                nextYear = year
            }
        }
        else {
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year
        }
        alert(`The next day is ${nextDay}/${nextMonth}/${nextYear}`)
        break;
    }
}
