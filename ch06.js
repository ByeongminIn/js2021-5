// let foo = [];

// console.log(foo[0]);
// console.log(foo[3]);

/* let foo = {
    제품명: "건조 망고",
    유형: "당절임",
    원산지: "필리핀",
    price : 1200
};

console.log(foo);
console.log(foo.제품명);
console.log(foo.price);

for ( let key in foo){
    console.log(`${key}:${foo[key]}`)
} */

/* let foo = {
    name:"건조 망고",
    price: 1200,
    print function()
} */

let product = [
    {name: '사과',price: 1200},
    {name: '배',price: 1500},
    {name: '쟈두',price: 1000},
    {name: '딸기',price: 2000},
    {name: '바나나',price: 1500},
];

function printProduct(product){
    console.log(`${product.name} - ${product.price}`);
}

for (let foo of product){
printProduct(foo);
}