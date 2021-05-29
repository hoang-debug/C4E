// //Bai1
// let cloths = [`Ao`, `Quan`, `Vay`];
// while (true) {
//     let command = prompt(`Welcome, what do you want (C, R, U, D)`);
//     //nguoi dung an cancel
//     if (!command) {
//         break;
//     }
//     let cmd = command.toLowerCase();
//     if (cmd === `r`) {
//         for(let i = 0; i < cloths.length; i++) {
//             console.log(`${i + 1}. ${cloths[i]}`);
//         }
//     }
//     else if()
// }
// let person = { //person la mot object
//     name: `Quan`,//name la property(key), Quan la value
//     age: 22,
//     location: `Ha Noi`,
//     height: 170,
//     weight: 60
// }
// console.log(person.age);
// console.log(`Dia chi cua ${person.name} la`, person.location);
// console.log(`Dia chi cua ${person[`name`]} la`, person[`location`]);
// let key = `weight`;
// console.log(person[key]);//Doc gia tri weight cua person

let bestFilmOfTheYear = {
    title: `Co dau dai chien`,
    year: 2011,
    rate: 9
}
 console.log(bestFilmOfTheYear.title);
 console.log(bestFilmOfTheYear[`title`]);
//  let inputKey = prompt(`Nhap gia tri:`);
//  if(bestFilmOfTheYear[inputKey] === undefined) {
//      alert(`Khong ton tai`);
//  }
//  else{
//      alert(bestFilmOfTheYear[`inputKey`])
//  }
let upRate = Number(bestFilmOfTheYear.rate) + 0.5;
alert(upRate);
let inputKey = prompt(`Nhap ten gia tri muon thay doi:`);
let newValue = prompt(`Thay doi gia tri thanh:`)
 if(bestFilmOfTheYear[inputKey] === undefined) {
     alert(`Khong ton tai`);
 }
 else{
     bestFilmOfTheYear[inputKey]= newValue
 }
 console.log(bestFilmOfTheYear[inputKey])