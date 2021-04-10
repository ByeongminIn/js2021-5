// 예제4-9 break 키워드
let i=0;
/*let array = [1, 31, 273, 57, 8, 11, 31];
let output;

while (true){
    if (array[i] %2 ==0){
        output = array[i];
        break;
    }
    console.log(i);
    i = i+1; // i++ , i+=1;
}*/
/*
배열의 이름을 바꿔보자.
변수명은 길더라도 무슨 역할을 하는지 명확히 한다.
키워드로 오해할 만한 단어는 사용하지 말자.
*/

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

// console.log(`처음 발견한 짝수는 ${bar}입니다.`);

/*
// 선언 및 초기화
let foo = new Array(); // int a ; a = 10; // int a = 10;
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
foo = foo.concat(bar);
console.log(foo);
foo = bar.concatr(foo);
console.log(foo);

// reverse은 배열을 역순으로 재배치.
console.log("\n reverse");
foo.reverse();
console.log(foo);

// sort는 배열을 정렬;
console.log("\n sort");
foo.sort();
console.log(foo);

// array.slice( [시작 인덱스], [마지막 인덱스])
// 정방향 인덱스  0 1 2 3 4 5
// ==========================
// 역방향 인덱스 -5 -4 -3 -2 -1
console.log("\n slice");
console.log(foo);
console.log( foo.slice(1,5));
// 인덱스 5는 범위의 마지막이기 때문에 포함되지 않는다.
// 즉 마지막 인덱스1에서 4까지만 반환한다.

// array.splice( [begin index], [delete count], [add item])
console.log("\n splice");
foo = ["a","b","c","d","e"];
console.log(dfs);
bar = foo.splice(2,,100,0.5,"문자");
console.log(foo);
console.log(bar);

// join은 배열값들 사이에 원하는 문자를 삽입하여 반환.
console.log("\n join");
foo = foo.join(",");
console.log(foo);