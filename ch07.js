// 예제 7-10
let foo = [55,65,400,150,24];

foo.forEach((item,index) => {
    console.log(`${index} - ${item}`);
})
console.log("=======================");
let bar = foo.map((item,index) => {
    return item + 10;
});
console.log(bar);
console.log("=======================");
let foobar = foo.filter((item,index) => {
    return item % 2 == 0;
});
console.log(foobar);
// 예제 7-8
// let foo= [10,3,5,20];
/* let foo= [
    {
        // key: value,
        name: "고구마",
        price: 1000
    },
    {
        name: "감자",
        price: 500
    },
    {
        name: "바나나",
        price: 1500
    }];

let popped = foo.pop();
console.log(popped);
console.log(foo);
console.log();

foo.push(popped);
foo.push(
    {
        name:"사과",
        price: 2000
    },
    {
        name: "수박",
        price: 3000
    });
console.log(foo); */

// 예제 7-7
/* let now = new Date();
let before = new Date('Dec 9,2020');

let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000*60*60*24));

console.log(`태어나고 ${interval}일 지났습니다.`);
 */
// 예제 7-5
/* let foo = new Date();
console.log(foo);

foo.setFullYear(foo.getFullYear()+1);
foo.setMonth(foo.getMonth()+1);
foo.setDate(foo.getDate()+1);

console.log(foo); */

// 예제 7-3
/* let foo = "안녕하세요.";

if (foo.indexOf('아침') >= 0 ){
    console.log("굿모닝");
}
else {
    console.log("굿나잇");
}
 */
// code 7-12
/* let foo = "abcdefg";
let bar = foo.toUpperCase();
let foobar = bar.LowerCase();

console.log(foo);
console.log(bar);
console.log(foobar); */

// 예제 7-2
/* let foo = Number.MAX_VALUE;
let bar = Number.MAX_VALUE+1;

console.log(foo);
console.log(bar); */
// code 7-8
/* function Constructor(){ }
Constructor.foo = 273;
Constructor.bar = function () {};

console.log(Constructor.foo);
console.log(Constructor.bar); */
// 예제 7-1
/* let foo = 25.123;

console.log(foo.toFixed(1));
console.log(foo.toFixed(5)); */
// code 7-5
/* let foo = 273;
let bar = 512;
//메소드 추가
Number.prototype.method = function() {
    return "hello";
}

console.log(foo.method());
console.log(bar.method()); */
// code 7-4
/* let foo = 273;

//메소드 추가
foo.method = function() {
    return "hello";
}

console.log(foo.method()); */
// code7-1
/* let foo = false;
let bar = 123;

console.log(typeof foo);
console.log(typeof bar); */