// let foo = ["사과","배","바나나","딸기"];

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
    print: function() {console.log(`${this.name} - ${this.price}`);
}
};

foo.print();
 */

/* let product = [
    {name: '사과', price: 1200},
    {name: '배', price: 1500},
    {name: '자두', price: 1000},
    {name: '딸기', price: 2000},
    {name: '바나나', price: 1500}
];

function printProduct(product){
    console.log(`${product.name} - ${product.price}`);
}

for ( let foo of product) {
    printProduct(foo);
} */

/* function Product(name,price){
    this.name = name;
    this.price = price;
}

let product = new Product("바나나",1200);

console.log(product); */

/* function Product(name,price){
    this.name = name;
    this.price = price;
}

Product.prototype.print = () => {
    console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}

let product = new Product("바나나",1200);

product.print(); */

/* function Product(name,price){
    this.name = name;
    this.price = price;
}
Product.prototype.print = function() {
    console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
}
let products = [
    new Product('바나나',1200),
    new Product('사과',2000),
    new Product('배',3000),
    new Product('고구마',700),
    new Product('감자',600),
    new Product('수박',5000)
];

for(let product of products){
    product.print();
} */

console.log(null);
console.log(typeof(null));