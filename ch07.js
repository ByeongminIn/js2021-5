// 예제 7-3
let foo = "안녕하세요.";

if (foo.indexOf('아침') >= 0 ){
    console.log("굿모닝");
}
else {
    console.log("굿나잇");
}

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