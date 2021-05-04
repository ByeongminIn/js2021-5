# 인병민 [201840225]
## [05월 04일]
### 오늘 배운 내용 요약
 > + 객체 기본
 > + 표준 내장 객체
### 여러줄 요약
1. 객체기본
    + 프로토타입
        + 생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지정해서 모든
        객체가 공유 하도록 함,해당 함수를 생성사 함수로 사용했을 때만 의미가 있음.
            + 예제
            ```
            function Product(name,price){
            this.name = name;
            this.price = price;
            }

            Product.prototype.print = () => {
                console.log(`${product.name}의 가격은 ${product.price}원 입니다.    `);
            }

            let product = new Product("바나나",1200);

            product.print();
            ```
            + 결과값
            ![1](https://user-images.githubusercontent.com/79895970/116967393-27ce7300-aced-11eb-81dc-e7e75a9ffb9c.png)
    + 객체 지향적으로 구성한 객체 배열
        + 예제
        ```
        function Product(name,price){
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
        }
        ```
        + 결과값
        ![2](https://user-images.githubusercontent.com/79895970/116967833-2d788880-acee-11eb-900e-cf9c1e488ddf.png)
    + null의 값과 자료형
        + 예제
        ```
        console.log(null);
        console.log(typeof(null));
        ```
        + 결과값
        ![3](https://user-images.githubusercontent.com/79895970/116968093-c1e2eb00-acee-11eb-9527-2f320bcc81a5.png)

        null의 자료형이 object로 출력되는 모습이다.
2. 표준 내장 객체
    + 
## [04월 27일]
### 오늘 배운 내용 요약
 > + 표준 내장 함수
 > + 익명 함수와 선언적 함수의 생성 순서
 > + 객체 기본
### 여러줄 요약
1. 표준 내장 함수
    + 기존에 이어서 진행 [설명](#표준-내장-함수)
        + clearInterval 함수 
            함수|설명|
            |:----|:----|
            clearInterval()|특정 시간마다 실행하던 함수 호출을 정지합니다.|

            + 예제

                ```
                let foo = setInterval(() => {
                console.log("출력합니다");},1000
                );

                setTimeout(()=>{
                    clearInterval(foo);}
                ,3000);
                ```

            + 결과값

                ![2](https://user-images.githubusercontent.com/79895970/116190339-6c926100-a765-11eb-97f7-9771891f7e17.PNG)

2. 익명 함수와 선언적 함수의 생성 순서
    + 변수 덮어쓰기
        + 예제
            ```
            let foo;
            foo = 10;
            foo = 20;
            console.log(foo);
            ```
        + 결과값

            ![3](https://user-images.githubusercontent.com/79895970/116191392-2b9b4c00-a767-11eb-86f9-e96729eef52b.PNG)
        
        foo에 20값을 넣으면서 10이 사라짐.
    + 함수 덮어쓰기
        + 예제
            ```
            let foo;
            foo = () => {console.log("1st");}
            foo = () => {console.log("2st");}
            
            foo();
            ```
        + 결과값

            ![1](https://user-images.githubusercontent.com/79895970/116812514-0d2fb900-ab8a-11eb-8ef3-0901e13282b5.PNG)

            1st가 아닌 2nd가 출력된 모습.

        + 예제2
            ```
            foo = () => {console.log("1st");}
            function foo() {console.log("2rd");}

            foo();
            ```
        + 결과값

            ![4](https://user-images.githubusercontent.com/79895970/116191727-ca27ad00-a767-11eb-9ba4-350646d4e518.PNG)
        
        익명함수가 선언적 함수를 덮어씀.<br>
        ※함수 이름을 선언 할때에는 이름이 <b>중복</b>되지 않게 설정해야한다
    + 익명함수와 화살표 함수의 차이
        + 예제
        ```
        (function () {
        console.log(this);
        })();

        ( () => {
            console.log(this);
        })();
        ```
        + 결과

            ![2](https://user-images.githubusercontent.com/79895970/116812954-597bf880-ab8c-11eb-8fed-46cb53ed9b3b.PNG)
            
            ![3](https://user-images.githubusercontent.com/79895970/116812956-5a148f00-ab8c-11eb-8302-9c41f3df4ec3.PNG)
        
        익명 함수의 this는 전역객체를 호출하였고 <br>화살표 함수는 상위 스코프의 this를 호출 하였다.
3. 객체 기본
    + 배열
        + 기본적인 설명은 3월30일 [배열](#배열)과 4월6일 [배열선언](#배열-선언) 기입해두었다.
    + 객체
        + 객체 선언
            + 예제
            ```
            let foo = {
            제품명: "건조 망고",
            유형: "당절임",
            원산지: "필리핀",
            price : 1200
            };

            console.log(foo);
            console.log(foo.제품명);
            console.log(foo.price);
            ```
            + 결과값

            ![4](https://user-images.githubusercontent.com/79895970/116813679-ec6a6200-ab8f-11eb-95ae-1263b753b1e7.PNG)

            기본적인 출력은 console.log에 객체 이름을 입력하고<br>
            특정 키값만 출력은 객체이름.키값으로 출력하면 된다.
        + 객체와 반복문
            + 예제
            ```
            let foo = {
            제품명: "건조 망고",
            유형: "당절임",
            원산지: "필리핀",
            price : 1200
            };

            for ( let key in foo){
                console.log(`${key}:${foo[key]}`)
            }
            ```
            + 결과값

            ![5](https://user-images.githubusercontent.com/79895970/116813886-1a9c7180-ab91-11eb-8339-ff90e20b3962.PNG)

            for in 반복문을 통해 객체의 내용을 출력하는 모습

            + this 키워드를 이용한 메소드 사용
            ```
            let foo = {
            name:"건조 망고",
            price: 1200,
            print: function() {console.log(`${this.name} - ${this.price}`);
            }
            };

            foo.print();
            ```
            + 결과값

            ![6](https://user-images.githubusercontent.com/79895970/116814275-09ecfb00-ab93-11eb-9f12-58d5e93b4d2c.PNG)
            
            화살표 함수는 사용이 불가능하다.<br>
            화살표 함수에서의 this는 상위 스코프를 지정하기 때문에 undefined 출력.
    + 생성자 함수와 프로토타입
        + 객체 배열을 함수를 이용하여 출력
            + 예제
            ```
            let product = [
            {name: '사과', price: 1200},
            {name: '배', price: 1500},
            {name: '자두', price: 1000},
            {name: '딸기', price: 2000},
            {name: '바나나', price: 1500}
            ];

            function printProduct(product){
                console.log(`${product.name} - ${product.price} `);
            }

            for ( let foo of product) {
                printProduct(foo);
            }
            ```
            + 결과값

            ![7](https://user-images.githubusercontent.com/79895970/116814917-16268780-ab96-11eb-903d-2a3b0353160f.PNG)

        + 생성자 함수
            + 객체를 만드는 함수,대문자로 시작하는 이름 사용
                + 예제
                ```
                function Product(name,price){
                    this.name = name;
                    this.price = price;
                }
                
                let product = new Product("바나나",1200);
                
                console.log(product);
                ```
                + 결과값
                
                ![8](https://user-images.githubusercontent.com/79895970/116815174-589c9400-ab97-11eb-908d-2347d3401b4b.PNG)
### 오늘 배운 내용 요약
 > + 익명 함수
 > + 선언적 함수
 > + 화살표 함수
 > + 함수의 기본 형태 
 > + 콜백 함수
 > + 표준 내장 함수
### 여러줄요약
1. 익명 함수
    + 이름을 붙이지 않고 함수 생성
    + 함수를 호출하면 함수 내부의 코드 덩어리가 모두 실행
    + 주로 일회성으로 사용함<br>

        <b>기본형</b>
        ```
        let <함수 이름> = function () { 
    
         };
        ```
        + 예제
        ```
         let foo = function () {
         console.log("첫번째 줄");
         console.log("두번째 줄");
         };
 
         foo();
         console.log(foo); 
        ```
        + 결과값

        ![1](https://user-images.githubusercontent.com/79895970/115143160-a043fb80-a080-11eb-9caf-1901bd1954ea.PNG)
2. 선언적 함수
    + 이름이 있는 함수<br>

        <b>기본형</b>
        ```
        fuction <함수 이름> () {

        };
        ```
        + 예제
        ```
        function foo () {
        console.log("첫번째 줄");
        console.log("두번째 줄");
        };

        foo();
        console.log(foo);
        ```
        + 결과값

        ![1](https://user-images.githubusercontent.com/79895970/115143160-a043fb80-a080-11eb-9caf-1901bd1954ea.PNG)
3. 화살표 함수
    + 하나의 표현식을 리턴하는 함수를 만들 때는 중괄호 생략 가능<br>
        <b>기본형</b>
        ```
        let 함수이름 = () => {

         };
        ```
        + 예제
        ```
        let foo = () => {
        console.log("첫번째 줄");
        console.log("두번째 줄");
        };

        foo();
        console.log(foo);
        ```
        + 결과값

        ![1](https://user-images.githubusercontent.com/79895970/115143160-a043fb80-a080-11eb-9caf-1901bd1954ea.PNG)
4. 함수의 기본 형태
    + 기본 형태
        ```
        fuction<함수 이름>(<매개 변수>){
            <함수 코드>
            return <리턴 값>
        }
        ```
        + 리턴값은 반드시 필요한것이 아님
    + 예제
        ```
        function power(x){
        return x*x;
        };
        
        console.log(power(10));
        console.log(power(20));
        ``` 
        + 결과값

            ![2](https://user-images.githubusercontent.com/79895970/115143731-041bf380-a084-11eb-8767-5b391ab5f7dd.PNG)
    + 예제2
        ```
         function foo(x) {
        let bar = x * x;
        return bar;
        }

        let foobar = foo(10);
        console.log(foobar);            
        ```           
        + 결과값은 동일하나 함수를 사용하면 리턴으로 바로반환하는 것보다 변수에 반환값을 넣고 출력하는것이 가독성이 더 좋다.
    + 매개 변수가 여러개인 함수
        ```
        let power = (x,y) => {
        return x*y;
        };
        console.log(power(20,10));
        console.log(power(30,20));
        console.log(power(40,30));
        ```
        + 결과값

            ![3](https://user-images.githubusercontent.com/79895970/115144270-c10f4f80-a086-11eb-9f23-00b24781ec70.PNG)
    + 리턴 없는 함수
        ```
        function print(message) {
        console.log(`"${message}"라고 말했습니다.`);
        }
        print("안녕하세요");
        ```
        + 결과값

        ![4](https://user-images.githubusercontent.com/79895970/115144369-3aa73d80-a087-11eb-8a2c-47f4d9b932d7.PNG)
    + 리턴하는 함수의 기본형태
        + 기본형
        ```
        function(<매개 변수>,<매개 변수>) {
            let output= <초깃값>;
            // output 계산
            return output;
        }
        ```
        + 예제
        ```
        function sum (min,max) {
            let output = 0;
            for( let i = min; i<= max;i++){
                output += i;
            }
            return output;
        }        
        ```
        + 결과값

            ![6](https://user-images.githubusercontent.com/79895970/115144571-565f1380-a088-11eb-8851-0657546224aa.png)
    + 매개 변수를 입력하지 않고 함수 호출
        + 예제
            ```
            function print(name,count) {
            console.log(`${name}이/가 ${count}개 있습니다.`);
            }
            print("사과",10);
            print("사과");
            print();
            ```
            + 결과값

            ![5](https://user-images.githubusercontent.com/79895970/115144715-23694f80-a089-11eb-99c3-4150e5776061.PNG)
5. 콜백 함수
    + 함수의 매개 변수로 전달되는 함수
        + 예제
        ```
        function tenTimes(foo) {
        for (let i = 0; i < 10; i++){
            foo();
        }
        }

        tenTimes( () => {
            console.log("함수 호출");
        })
        ```
        + 결과값

        ![7](https://user-images.githubusercontent.com/79895970/115145915-1ea79a00-a08f-11eb-8fa6-8596e5421d8c.PNG)
6. ##### 표준 내장 함수
    + 자바스크립트에서 기본적으로 지원하는 함수
        + 숫자 변환 함수

        함수|설명|
        |:----|:----|
        |parseInt()|문자열을 정수로 변환합니다.|
        |parseFloat()|문자열을 실수로 변환합니다.|

        + 예제
            ```
            let inputA = '52';
            let inputB = '52.273';
            let inputC = '1403동';

            console.log(parseInt(inputA));
            console.log(parseFloat(inputA));
            console.log(parseInt(inputB));
            console.log(parseFloat(inputB));
            console.log(parseInt(inputC));

            console.log(Number(inputA));
            console.log(Number(inputB));
            console.log(Number(inputC));
            ```
            + 결과값

            ![8](https://user-images.githubusercontent.com/79895970/115146411-66c7bc00-a091-11eb-8b11-a14c8fe32416.PNG)
        + paseint는 진수를 나타낼때에도 사용한다

            ![10](https://user-images.githubusercontent.com/79895970/115146733-b8247b00-a092-11eb-9f63-f84c3a28318b.png)

            + 11011을 2진수의 int값으로 정의하여서 결과값에 27이 반환된모습.
        + 타이머 함수
            + '특정 시간 후에'또는'특정 시간마다'어떤 일을 할 때 사용
            + 시간은 밀리초로 지정,1초를 나타내려면 1000(밀리초)을 입력 

            함수|설명|
            |:-----|:-----|
            setTimeout(함수,시간)|특정 시간 후에 함수를 실행합니다.|
            setInterval(함수,시간)|특정 시간마다 함수를 실행합니다.|

            + 예제
                ```
                setTimeout(() => {
                console.log("1초 경과!!!"); 
                }, 1000);

                setInterval(() => {
                    console.log("인터벌 1초 경과!!!");
                }, 1000);
                ```
                 + 결과값

                    ![11](https://user-images.githubusercontent.com/79895970/115146989-ebb3d500-a093-11eb-8d16-726c4b62fe2f.PNG)

                    + 인터벌상태에서 종료는 Ctrl + C 를 누르면 종료됩니다.

## [04월 06일]
 > + for문
 > + break 키워드
 > + 배열
 > + continue 키워드
 > + scope
 > + var
### 오늘 배운 내용 요약
1. for in 반복문,for of 반복문
    + [설명](#for-in-반복문for-of-반복문)
    + for in 반복문
        ```
        let foo = [10,20,30,40,50];

        for (let i in foo){
        console.log(`${i}번째 요소는 ${foo[i]}이다.`)
        }
        ```
        + 결과값

        ![1](https://user-images.githubusercontent.com/79895970/114254293-65d7c000-99e9-11eb-9b75-afdbe8aa7964.PNG)
    + for of 반복문
        ```
        let foo = [10,20,30,40,50];

        for (let item of foo){
        console.log(item)
        }
        ```
        + 결과값

        ![2](https://user-images.githubusercontent.com/79895970/114254402-1f369580-99ea-11eb-8548-144b32f18946.PNG)
    + [for문 연습용 별 피라미드 만들기](./ch04-7-8.js)
2. break 카워드
    + 반복문을 벗어날 때 사용
    + 무한 반복문은 내부에서 break 키워드를 사용해야 벗어날 수 있음
        + 예제
        ```    
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
        console.log(`처음 발견한 짝수는 ${bar}입니다.`);
        ```
        + 결과값

        ![3](https://user-images.githubusercontent.com/79895970/114258203-edc8c480-99ff-11eb-8995-bf0356b7eb4a.PNG)<br>
        + break는 상위 키워드에서 빠져나오는것이기 때문에 if에서 빠져나오는것이 아닌 while을 빠져나온다.
3. 배열
    + 기본적인 설명은 3월30일 [배열](#배열)에 기입해두었다.
        + #### 배열 선언
        ```
        // 선언 및 초기화
        let foo = new Array(); 
        let bar = [];
        foo = [1,10,오렌지]
        bar = [1,10,오렌지]
        
        // 선언과 동시에 초기화
        let foo = new Array(1,10,오렌지);
        let bar = [1,10,오렌지];
        ```
        기본적인 선언과 초기화는 이러한 방식으로 진행된다.
        + 배열의 길이를 구하는 명령어
        ```
        console.log( foo.length );
        ```
        + push 함수

            + 배열에 값을 추가하는 함수
            ```
            bar = [0];
            console.log("\n push");
            bar.push(1,2,3);
            console.log(bar);
            ```
            + 결과값

            ![4](https://user-images.githubusercontent.com/79895970/114263868-e535b580-9a22-11eb-90a4-045068d0047e.PNG)

            bar 배열에 1,2,3이 추가된 모습
        + pop 함수

            + 배열의 끝값을 제거하는 함수
            ```
            console.log("\n pop");
            bar.pop();
            console.log(bar);
            ```
            + 결과값

            ![5](https://user-images.githubusercontent.com/79895970/114264009-655c1b00-9a23-11eb-9d73-22cc64897098.PNG)

            3이 사라진 모습.
        + shift 함수
            + 배열 첫번째 값을 제거하고 반환하는 함수
            ```
            console.log("\n shift");
            bar.shift();
            console.log(bar);
            ```
            + 결과값

            ![7](https://user-images.githubusercontent.com/79895970/114266016-ea006680-9a2e-11eb-8c86-9e9158ad2740.png)
            
            0이사라지고 반환된 모습.
        + concat 함수
            + 두 배열을 합쳐주는 함수
            ```
            console.log("\n concat");
            let dgx = [1,2];
            bar = bar.concat(dgx);
            console.log(bar);
            ```
            + 결과값

            ![8](https://user-images.githubusercontent.com/79895970/114266017-ea98fd00-9a2e-11eb-9224-ba43dfef8232.png)

            bar 배열 값에 dgx 배열이 붙은모습.
        + reverse 함수
            + 배열을 역순으로 재배치하는 함수
            ```
            console.log("\n reverse");
            bar.reverse();
            console.log(bar);
            ```
            + 결과값

            ![9](https://user-images.githubusercontent.com/79895970/114266018-ea98fd00-9a2e-11eb-87fe-398f7b61ca30.png)            

            concat에서 배열의 위치랑 반대된 모습
        + sort 함수
            + 배열을 정렬해주는 함수
            ```
            console.log("\n sort");
            bar.sort();
            console.log(bar);
            ```
            + 결과값

            ![10](https://user-images.githubusercontent.com/79895970/114266020-eb319380-9a2e-11eb-98aa-a1340c1dc6c8.png)
            
            reverse결과값에서 정리된 모습.
        + slice 함수
            + 시작 지점부터 끝지점 전까지의 인덱스 값을 반환시키는 함수
            ```
            console.log("\n slice");
            console.log(bar);
            console.log( bar.slice(1,3));
            ```
            + 결과값
            
            ![11](https://user-images.githubusercontent.com/79895970/114266021-eb319380-9a2e-11eb-9b18-c137e0f93431.png)

            시작 지점 1부터 3전까지의 인덱스 값이 반환 됐다.
        + splice 함수
            + 원하는 위치에 요소를 추가하거나 삭제하는 함수
            + splice(시작지점,삭제갯수,추가할내용)
            ```
            console.log("\n splice");
            let dfs = [];
            dfs = bar.splice(2,2,100,0.5,"문자");
            console.log(bar);
            console.log(dfs);
            ```
            + 결과값

            ![13](https://user-images.githubusercontent.com/79895970/114266022-ebca2a00-9a2e-11eb-8ab5-66d93db976fd.png)
            
            bar에 2번인덱스부터 2개의 배열이 사라지고 내용이 추가됐다.<br>
            dfs에는 bar의 삭제된 값이 저장됐다.
        + join 함수
            + 배열값들 사이에 원하는 문자를 삽입하는 함수
            ```
            console.log("\n join");
            bar = bar.join("!");
            console.log(bar);
            ```
            + 결과값

            ![14](https://user-images.githubusercontent.com/79895970/114266024-ebca2a00-9a2e-11eb-86ab-a3bb175a04b9.png)

            배열값 사이에 !가 들어갔다.
4. continue
    + 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행함
    + [예제](./ch04-10.js)
        + 결과값

        ![1](https://user-images.githubusercontent.com/79895970/114266699-9b54cb80-9a32-11eb-822e-3fc53077901f.PNG)

5. <b>스코프(scope)</b>
    + 변수를 사용할 수 있는 범위 
    ```
    {

    }
    ```
    + 스코프 내에서 선언한 변수는 스코프 내에서만 사용 가능하다
6. <b>var 키워드</b>
    + var 키워드 : 익스플로러
        +var 키워드로 생성한 변수는 모든 곳에서 사용
    + let : 자바스크립트 최근 html에서 사용
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
6. #### 배열
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
    + #### for in 반복문,for of 반복문
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
