// let menu = [ `thit`, `ca`, `trung`, `rau`];
// console.log(menu);
// //khai bao mang rong
// let emptyMenu=[];
// console.log(emptyMenu);
// //do dai cua mang
// console.log(menu.length);

//BT1
let tenCacPhim = [`Justice League`, `Co dau dai chien`, `Fight Club`, `Misson Imposible`];
console.log(tenCacPhim);
let themPhim = prompt(`Ban thich them phim gi:`);
tenCacPhim.push(themPhim);// Push them gia tri vao mang
console.log(tenCacPhim);
let i = Number(prompt(`Nhap thu tu phim ban muon:`));
let tenPhimChon = tenCacPhim[i];
alert(`${tenPhimChon}`);

for (let i = 0; i < tenCacPhim.length; i++) {
    tenPhimChon = tenCacPhim[i];
    console.log(tenPhimChon);
}

tenCacPhim[0]= prompt(`Cap nhat ten phim dau tien:`);
let j =Number(prompt(`Nhap thu tu phim muon doi:`));
console.log(tenCacPhim);
tenCacPhim[j]= prompt(`Cap nhat lai ten phim;`);
console.log(tenCacPhim);