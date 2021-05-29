// let lastName1 = prompt(`Họ của bạn là gì ?`)
// let firstName1 = prompt(`Tên của bạn là gì ? `)
// alert(`Xin chào ${lastName1} ${firstName1}`)

// let lastName2 = prompt(`Họ của bạn là gì ?`)
// let firstName2 = prompt(`Tên của bạn là gì ? `)
// alert(`Xin chào ${lastName2} ${firstName2}`)

// let lastName3 = prompt(`Họ của bạn là gì ?`)
// let firstName3 = prompt(`Tên của bạn là gì ? `)
// alert(`Xin chào ${lastName3} ${firstName3}`)


// for (let i = 1; i <= 3; i++){
//     let lastName1 = prompt(`Họ của bạn là gì ?`)
//     let firstName1 = prompt(`Tên của bạn là gì ? `)
// alert(`Xin chào ${lastName1} ${firstName1}`)
// }

// for (let i = 0; i <= 100; i++){
//     console.log(i)
// }

// for (let i = 100; i >= 1; i--){
//     console.log(i)
// }

// for (let i = 10; i <= 50; i += 2){
//     console.log(i)
// }

// let i = 10
// while(i <= 50 ) {
//     console.log(i)
//     i += 2
// }

// let i= ``
// while(i !==`yes`){
//      i= prompt(`Do you love me ?`)
// }

weight = prompt(`Can nang cua ban: `)
height = prompt(`Chieu cao cua ban: `)
yourBMI = weight / (height * height)
if (yourBMI < 18.5) {
    alert(`The trang cua ban la: Gay`)
}
else if (yourBMI > 18.5 && yourBMI < 24.9) {
    alert(`The trang cua ban la: Binh thuong`)
}
else if (yourBMI > 25 && yourBMI < 29.9) {
    alert(`The trang cua ban la: Beo phi cap do 1`)
}
else if (yourBMI > 30 && yourBMI < 34.9) {
    alert(`The trang cua ban la: Beo phi cap do 2`)
}
else if (yourBMI > 35 && yourBMI < 39.9) {
    alert(`The trang cua ban la: Beo phi cap do 1`)
}
else {
    alert(`The trang cua ban la: Beo phi cap do 3`)
}