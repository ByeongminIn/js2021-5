# 인병민 [201840225]

## [03월 30일]
### 오늘 배운 내용 요약
 > + 조건문
 > + 삼항연산자
 > + prompt()함수
 > + 배열
 > + 반복문
### 여러줄 요약
1.  중첩 조건문
    + 기본문법
    ```
    if (불 표현식){
        if (불 표현식){
            문장;
        } else {
            문장;
        }
    } else {
        if (불 표현식) {
            문장;
        } else {
            문장;
        }
    }
    ```
    + if else if 조건문
    ```
        + if(<불 표현식>) {   

        } else if (<불 표현식>) {

        } else if (<불 표현식>) {

        } else {
    
        }
    ```
2.  switch 조건문
    + 기본 문법
    ```
    switch(<비교할 값>){
        case <값>;
        <문장>
        braek;
        case <값>;
        <문장>
        break;
        default;
        <문장>
        break;
    }
    ```
    ![1](https://user-images.githubusercontent.com/79895970/113305332-e178a380-933d-11eb-822a-cf61a11bdc99.PNG)
    +  break 키워드를 사용하지 않는 switch 조건문
    ```
    let date = new Date();

    switch ( date.getMonth() + 1 ) {
     case 12:
     case 1:
     case 2:
     console.log("겨울");
     break;
     case 3:
     case 4:
     case 5:
     console.log("봄");
     break;
     case 6:
     case 7:
     case 8:
     console.log("여름");
     break;
     case 9:
     case 10:
     case 11:
     console.log("가을");
     break;
     default:
     console.log("???");
     break;
    }
    ```
3. 삼항연산자
    + 기본 문법
    ```
    <불 표현식> ? <참> : <거짓>
    ```

4. 짧은 초기화 조건문
    + ||연산자를 불이 아닌 자료에 사용할 경우
        + A||B에서 A가 참이라면 A로 대치
        + A||B에서 A가 거짓이라면 B로 대치
5. 웹 브라우저에서 작동하는 자바스크립트는 prompt() 이름의 함수를 받음
[prompt()의 예시파일](./c3-18.js)
6. 배열
    + 여러개의 자료를 한꺼번에 다룰 수 있는 자료형
    + 대괄호 내부의 각 자료는 쉼표로 구분
    + 배열에는 여러 자료형이 섞여 있을수 있음
    + 요소:배열 안에 들어있는 각 자료
    + let 이름 = [자료,자료,자료]
7. while 반복문
    + 기본 문법
    ```
    while(<불 표현식>){
        블 표현식이 참일 동안 실행할 문장
    }
    ```
    + while문은 얼마나 반복해야할지 모를때 사용을한다.
8. for문
    + 기본 문법
    ```
    for(초기화식;조건식;증감식){
        실행문장;
    }
    ```
    + 초기화식=>조건식=>실행문장=>증감식 이후 조건식=>실행문장=>증감식을 조건식이 거짓일때까지 반복.
    + 역 for 반복문
        + 증가하는 for문과 반대로 최댓값으로 시작해 점점 감소하는 방식.
    + for in 반복문,for of 반복문
        + 기본 문법
        ```
        for(let 변수 (in or of) 리스트){
            실행문장;
        }
        ```
        + in은 리스트에서 인덱스값을 순서대로 가져오는것이고 of는 배열에 있는 요소들을 순서대로 가지고오는것이다.
## [03월23일]
### 오늘 배운 내용 요약
 > 1.문자열<br>
 > 2.이스케이프 문자<br>
 > 3.비교 연산자<br>
 > 4.강제 자료형 변환<br>
 > 5.Boolean()함수<br>
 > 6.일치연산자<br>
 > 7.상수<br>
 > 8.if,if else 조건문<br>

### 여러줄 요약
피제수: 나뉘어지는 수<br>
제수: 나누는 수<br>
피제수 / 제수 의 나머지 결과값의 부호는 피제수의 부호에만 영향을 미친다.

문자열은 큰따옴표 혹은 작은 따옴표를 사용하여 표기한다.<br>
큰 따옴표와 작은따옴표 둘다 문자열로 인식을 하지만 실제 코딩을 할때 특수한 경우를 제외하고 큰따옴표나 작은따옴표중 한가지를 통일하여 사용하는것이 좋다.

이스케이프 문자를 사용하면 문자 그대로 사용이 가능하다.<br>
![1](https://user-images.githubusercontent.com/79895970/112425436-67628080-8d79-11eb-87ba-0292030a9d65.PNG)

문자열에서는 + 연산자는 사용이 가능하나 다른 연산자는 사용이 불가능 하다.<br>
문자열[숫자]에서 대괄호는 배열을 의미하고 숫자는 인덱스값을 의미한다.<br>
문자열은 자바스크립트에서 배열로 다룰수가 있다.

변수를 지정할때는 let 을 이용.ex)let a ="hello world";<br>

문자열 + 숫자 는 문자열로 인식을 하게 된다.<br>

불대수 : 참 혹은 거짓을 표현하는것.<br>

강제 자료형 변환 : 자료형을 함수를 이용하여 강제로 변환 시키는것으로 종류는 아래와 같다.<br>
![2](https://user-images.githubusercontent.com/79895970/112426125-b65ce580-8d7a-11eb-8e32-5b39b8f12693.PNG)

Number() 함수를 이용하였을때 문자열은 NaN(Not a Number)이 출력이 되는데 이것은 숫자형이지만 숫자가 아닌것을 의미하는 내용이다.<br>
Nan의 특징<br>
1.표현 불가능한 수치형 결과를 나타내는 값.<br>
2.자기 자신과 일치하지 않는 유일한 값.<br>
![3](https://user-images.githubusercontent.com/79895970/112427092-61ba6a00-8d7c-11eb-8e83-23d869908e48.PNG)

Boolean() 함수<br>
Boolean() 함수를 사용하면 5개의 요소는 false로 변환<br>
0,NaN,"",null,undefined<br>
![5](https://user-images.githubusercontent.com/79895970/112429925-c11a7900-8d80-11eb-9ef0-2b2ea8dff065.PNG)

!연산자를 두번 사용하면 Boolean()함수를 사용하는것과 같은 결과가 나온다.<br>
일치 연산자 : 두 자료의 "자료형"을 비교하는 연산자<br>
![6](https://user-images.githubusercontent.com/79895970/112431488-f3c57100-8d82-11eb-9b22-31b12c9d543c.PNG)

ex)${52 == "52"} = true<br>
   ${52 === "52"} = false<br>
첫번째는 숫자가 같아서 true가 나왔지만 두번째에서는 52가 Number형 "52"가 string형이기때문에 두 자료형이 달라 false가 반환 되었다.<br>

상수 : '항상 같은 수' 라는 의미,변수와 반대되는 개념<br>
상수 선언은 const를 사용.<br>

if 조건문 : 불 표현식이 true이면 문장을 실행,false이면 문장을 무시함.<br>
if(불 표현식){

}<br>
![7](https://user-images.githubusercontent.com/79895970/112432762-ad711180-8d84-11eb-810d-43a0f59738aa.PNG)

if else 조건문 : 불 표현식이 true이면 true 문장을 실행하고,fales이면 false 문장을 실행하는 조건문이다.<br>
if(불 표현식){
    true 문장
}<br>
else{
    false 문장
}<br>

![8](https://user-images.githubusercontent.com/79895970/112433204-430ca100-8d85-11eb-8e51-a5a09fb2d2e4.PNG)
## [03월16일]
 > 오늘 배운 내용 요약<br />
 > 여러줄 요약<br>
 > 3번
 
배운내용
자바스크립트 실행 방법