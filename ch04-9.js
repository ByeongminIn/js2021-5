i=0;
let foo = [2,3,5,4,10];
while (true){
    if (foo[i] %2 ==0){
        bar = foo[i];
        break;
    }
    console.log(i);
    i = i+1; // i++ , i+=1;
}

/* i=0;
let foo = [1,3,5,7,9];
while (true){
    if (foo[i] %2 ==0){
        bar = foo[i];
        break;
    }
    i = i+1;  //i++ , i+=1; 
    console.log(i);
} */

console.log(`처음 발견한 짝수는 ${bar}입니다.`);

/*
// 선언 및 초기화
let foo = new Array(); // int a
let bar = [];
foo = [1,10,오렌지]
bar = [1,10,오렌지]

// 선언과 동시에 초기화
let foo = new Array(1,10,오렌지);
let bar = [1,10,오렌지];

// 배열의 길이
console.log( foo.length );
*/

//push는 배열의 끝에 원하는 값을 추가해주는 함수.
bar = [0];
console.log("\n push");
foo.push("자료구조",1, 0.5);
bar.push(1,2,3);
console.log(foo);

// pop은 배열의 마지막 주소에 있는 값을 제거해주는 함수.
console.log("\n pop");
foo.pop();
console.log(foo);

// shift는 배열의 첫번째 주소에 있는 값을 제거한 후에 반환해주는 함수
console.log("\n shift");
foo.shift();
bar.shift();
console.log(foo);
console.log(bar);

// push와 pop을 이용하면 stack으로 이용할 수 있다.
// push와 shift를 이용하면 queue로 이용할 수 있다.

//concat은 두개의 배열을 합쳐주는 함수.
console.log("\n concat");

// reverse은 배열을 역순으로 재배치.
console.log("\n reverse");

// sort는 배열을 정렬;
console.log("\n sort");