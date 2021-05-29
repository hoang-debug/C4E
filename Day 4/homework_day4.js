//1.0
let dictionary = {
    debug: `The process of figuring out why your program has a certain error and how to fix it`,
    done: `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
    defect: `The formal word for 'error'`,
    pm: `The short version  of Project Manager, the person in charge of the final result of a project`,
    uiux: `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`
}
//1.1, 1.2
alert(`Hi there, this is dev dictionary`);
while (true) {
    let keyWord = prompt(`Enter a keyword:`);
    if (dictionary[keyWord] === undefined) {
        dictionary[keyWord] = prompt(`We could not find your word: ${keyWord}, leave your explanation :`);
    }
    else {
        alert(`${keyWord}\n${dictionary[keyWord]}`);
    }
}
//2
{
const product = {
    name: `Xiaomi rice cooker`,
    price: 1700,
    brand: `Xiaomi`,
    color: `white`
    };
    for (let x in product) {
    console.log(x);
    }
2.1 //Bien x co gia tri la property
2.2
for(let y in product) {
    console.log(`${y}: ${product[y]}`);
}
}
//3
let product = [
    { name: `Xiaomi portable charger 20000mah`, brand: `Xiaomi`, price: 428, color: `White`, category: 'Charger' },
    { name: `VSmart Active 1`, brand: `VSmart`, price: 5487, color: `Black`, category: `Phone` },
    { name: `IPhone X`, brand: `Apple`, price: 21490, color: `Gray`, category: `Phone` },
    { name: `Samsung Galaxy A9`, brand: `Samsung`, price: 8490, color: `Gray`, category: `Phone` }
]
//3.1
for(let i=0; i< product.length;i++) {
    console.log(`Name: ${product[i].name}\nPrice: ${product[i].price}\n--------------------------------------`)
}
//3.2
for(let i=0; i< product.length;i++) {
    console.log(`#${i+1}. Name: ${product[i].name}\n    Price: ${product[i].price}`)
}
let productPosition =Number (prompt(`Enter product position:`));
console.log(`Name: ${product[productPosition-1].name}\nBrand: ${product[productPosition-1].brand}\nPrice: ${product[productPosition-1].price}\nColor: ${product[productPosition-1].color}\nCategory: ${product[productPosition-1].category}`);
//3.3
let j = 0;
let inCategory = prompt(`Enter your category:`);
for(let i=0; i< product.length; i++){
    if(inCategory===product[i].category){
        console.log(`Name: ${product[i].name}\nPrice: ${product[i].price}\n---------------------------------`);
        j++;
    }
}
if(j==0){
    alert(`category ban nhap khong ton tai`);
}
//3.4
product[0].providers = [`Phukienzero`, `Dientuccc`];
product[1].providers = [`Tgdd`, `Ddghn`, `VhStore`];
product[2].providers = [`Tgdd`];
product[3].providers = [`Tgdd`];
for(let i=0; i< product.length;i++) {
    console.log(`#${i+1}. Name: ${product[i].name}\n    Price: ${product[i].price}\n    Providers:${product[i].providers}`)
}
//3.5
let a=0;
let inProvider = prompt(`Enter your provider:`);
for(let b=0; b< product.length; b++){
    for(let c=0; c< product[b].providers.length; c++){
        if(inProvider===product[b].providers[c]){
            a++
            console.log(`Name: ${product[b].name}\nBrand: ${product[b].brand}\nPrice: ${product[b].price}\nColor: ${product[b].color}\nCategory: ${product[b].category}\nProviders: ${product[b].providers}\n-----------------------------`);
        }
    }
}
if(a==0){
    alert(`providers ban nhap khong ton tai`);
}