//1.1
for (let i1 = 0; i1 <= 6; i1++) {
    console.log(i1)
}
//1.2
let n2 = prompt(`Enter a number:`)
for (let i2 = 0; i2 < n2; i2++) {
    console.log(i2)
}
//1.3
let n3 = prompt(`Enter a number:`)
for (let i3 = 3; i3 < n3; i3++) {
    console.log(i3)
}
//1.4
let n4 = prompt(`Enter n:`)
let c4 = prompt(`Enter c:`)
while (c4 < n4) {
    console.log(c4)
    c4++
}
//1.5
let n5 = prompt(`Enter n:`)
let c5 = prompt(`Enter c:`)
let s5 = prompt(`Enter s:`)
Number(n5, c5, s5)
while (c5 < n5) {
    console.log(c5)
    c5 = + s5
}
//2
let nGiaiThua1 = prompt(`Enter a number:`)
let nGiaiThua2 = nGiaiThua1
for (let i = nGiaiThua2 - 1; i >= 1; i--) {
    nGiaiThua2 *= i
}
alert(`The factorial of ${nGiaiThua1} is ${nGiaiThua2}`)
//3
tuoiNguoiDung = prompt(`How old are you ?`)
if (tuoiNguoiDung >= 14) {
    alert(`Enjoy!`)
}
else {
    alert(`You are not old enough to view this content`)
}
//4
x = prompt(`x =`)
let mod = x % 2
if (mod == 0) {
    alert(`${x} is even number`)
}
else if (mod == 1) {
    alert(`${x} is odd number`)
}
else {
    alert('x is not Natural Number')
}
//5
let userName = `mindx`
let passWords = `codethechange`
let typedUserName = prompt(`Username:`)
let typedPassWords = prompt(`Passwords:`)

if (typedUserName != userName) {
    alert(`Wrong username !`)
}
else if (typedPassWords != passWords) {
    alert(`Wrong passwords !`)
}
else {
    alert(`Logged in successfully !`)
}

//5 bai chua
// let UserName = ``;
// let PassWords = ``;
// while (UserName !== `mindx` || PassWords !== `codethechange`) {
//     let UserName = prompt(`Username:`);
//     let PassWords = prompt(`Passwords:`);
//     if (UserName !== `mindx`) {
//         alert(`Username sai:`);
//     }
//     else if (PassWords !== `codethechange`) {
//         alert(`Passwords sai`);
//     }
//     else {
//         alert(`Dang nhap ko thanh cong`);
//     }
// }

// let UserName = ``;
// let PassWords = ``;
// while (true) {
//     let UserName = prompt(`Username:`);
//     let PassWords = prompt(`Passwords:`);
//     if (UserName !== `mindx`) {
//         alert(`Username sai:`);
//     }
//     else if (PassWords !== `codethechange`) {
//         alert(`Passwords sai`);
//     }
//     else {
//         alert(`Dang nhap ko thanh cong`);
//         break;
//     }
// }
