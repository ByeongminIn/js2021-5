// 예제4-10 continue 키워드
//

for(let i = 1; i < 10; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}
// 만일 여기에 break를 넣으면 어떻게 될까?
// continue를 사용하지 않고 홀수만 출력하게 하려면?