let date = new Date();
h = date.getHours();

console.log(h<3 || h> 8);
console.log(h >=3 && h<=8);

let type=typeof(date.getHours());
console.log(type);

// 홀짝
let input = 31;

if (date.getHours() < 12 ){
    console.log("오전");
}
else {
console.log("오후");
}

// Date()
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getMinutes());
console.log(date.getSeconds());
