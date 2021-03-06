# 인병민 [201840225]

## [06월 01일]
 > + 웹 브라우저의 자바 스크립트
 > + jQuery
### 여러줄 요약
+ 웹 브라우저의 자바 스크립트
    1. 사용할 수 없는 코드
        + let 키워드와 const 키워드
            |최신 버전 자바스크립트 코드|인터넷     익스플로러에서 사용해야 하는 코드|
            |-|-|
            |let variable = 273;|var varableA   = 273;|
            |const constant = "Hello World";|   var variable = "Hello World";|
        + 템플릿 문자열
            |최신 버전 자바스크립트 코드|인터넷     익스플로러에서 사용해야 하는 코드|
            |-|-|
            |let variable = 273;|var varable    = 273;|
            |console.log(`변수의 값은 $ (variable)입니다.`);|console.log ('변수의 값은 ' + variable +     '입니다.');|
        + 화살표 함수
            |최신 버전 자바스크립트 코드|인터넷     익스플로러에서 사용해야 하는 코드|
            |-|-|
            |const functionLiteral = () =>  {<br><br>};|const functionLiteral    = function () {<br><br>};|
        + for of 반복문
            |최신 버전 자바스크립트 코드|인터넷     익스플로러에서 사용해야 하는 코드|
            |-|-|
            |const array = ['가','나','다'];    <br><br>for (let item of array)     {<br>	console.log(item);<br>}|    var array = ['가','나','다'];   <br><br>for (var item in array)    {<br>	console.log(array[i]);  <br>}
        + 사용할 수 없는 메소드를 사용한 코드
            |최신 버전 자바스크립트 코드|인터넷     익스플로러에서 사용해야 하는 코드|
            |-|-|
            |const array = [1,2,3,4,5]; <br><br>array.forEach((item,     index) => {<br>    console.log(`$   {index}`);<br>});|var array = [1,  2,3,4,5];<br><br>for ( var i = 0;     i < array.length; i++) {<br>        var index = 1;<br>    var item =    array[i];<br>    console.log(item  + ' : ' + index);<br>}
    2. 브라우저 객체 모델
        + 웹 브라우저와 관련된 객체
    3. window 객체
        + window 객체 : 웹 페이지 자체를 나타냄
            + 새로운 화면을 열거나 웹   브라우저의 크기를 변경하는 등의 일
            + 대표적으로 경고 출력을 하는   경고창과 입력을 하는 프롬프트를   제공함
                |함수|설명|
                |-|-|
                |alert(<메시지>)|경고창을   출력합니다.|
                |prompt(<메시지>,<임시 글자>)|  프롬프트를 출력합니다.|
    4. screen 객체
        + 웹 브라우저에서 공통으로 활용할 수    있는 속성
            |속성|설명|
            |-|-|
            |width|화면의 너비|
            |height|화면의 높이|
            |availWidth|실제 화면에서 사용  가능한 너비|
            |availHeight|실제 화면에서 사용     가능한 높이|
            |colorDepth|사용 가능한 색상 수|
            |pixelDepth|한 픽셀당 비트 수|
    5. location 객체와 history 객체
        + 웹 브라우저에서 공통으로 활용할 수    있는 속성
            |속성|설명|예|
            |-|-|-|
            |href|문서와 URL 주소||
            |host|호스트 이름과 포트 번호|  localhost:52273|
            |hostname|호스트 이름|localhost|
            |port|포트 번호|52273|
            |pathname|디렉터리 경로|/folder/    HTMLPage.html|
            |hash|앵커 이름(#~)|#test|
            |search|요청 매개 변수|?param=10|
            |protocol|프로토콜 종류|http:|
        + 메소드
            |메소드|설명|
            |-|-|
            |assign(<링크>)|매개 변수로 전달한  위치로 이동합니다.|
            |reload()|새로고침합니다.|
            |replace()|매개 변수로 전달한   위치로 이동합니다(뒤로 가기 불가능).  |
        + history 객체의 메소드
            |메소드|설명|
            |-|-|
            |forward()|앞으로 이동합니다.|
            |back()|뒤로 이동합니다.|
    6. navigator 객체
        + 웹 페이지를 실행하는 웹 브라우저  정보가 들어있음
        + 사용자의 웹 브라우저,운영체제를 구분할    수 있음
            |속성|설명|
            |-|-|
            |appCodeName|웹 브라우저의 코드     이름|
            |appName|웹 브라우저의 이름|
            |appVersion|웹 브라우저의 버전|
            |platform|사용 중인 운영체제의  시스템 환경|
            |userAgent|웹 브라우저의 전체적인   정보|
+ jQuery
    1. jQuery 사용 준비
        + 공식 웹 사아트 주소는 <http://jquery.com>
        + jQuery 사용 방법 1 : 파일 다운로드해 사용
        + jQuery 사용 방법 2 : CDN을 활용
            + CDN은 사용자에게 간편하게 콘텐츠를 제공하는 방식
        + 각 페이지에 접속하면 jQuery 파일과 관련된 경로가 나옴
        + 이 주소를 사용해 script 태그를 만들어 넣음
    2. jQuery 객체
        + jQuery 라이브러리는 $ 함수 활용
        + $ 함수의 매개 변수에는 문서 객체,CSS 형식,HTML 형식의 문자열 삽입
            + jQuery 기본 사용 형태
                ```
                window.jQuery = window.$ = jQuery;
                ```
            + jQuery 객체생성
                ```
                // 일반 문서 객체로 jQuery 객체를 생성합니다.
                $(document)
                // CSS 선택자로 jQuery 객체를 생성합니다.
                $(`h1`)
                // HTML 문자열로 jQuery 객체를 생성합니다.
                $(`<h1></h1>`)
                ```
            + CSS 선택자를 사용해 문서 객체를 선택
                ```
                // h1 태그를 선택합니다.
                $(`h1`)
                // h1 태그 중에 class 속성으로 logo를 가진 태그를 선택합니다.
                $(`h1.logo`)
                // id 속성이 head인 태그를 선택합니다.
                $(`#head`)
                // input 태그 중에 type 속성이 submit인 태그를 선택합니다.
                $(`input[type=submit]`)
                ```
                |메소드|설명|
                |-|-|
                |parent()|부모 태그를 선택합니다.|
                |find()|후손 태그를 찾습니다.|
    3. 문서 객체 선택
        + 예)h1 태그에 parent ()메소드와 find () 메소드를 사용
            ```
            // h1 태그의 부모 태그를 선택합니다.
            $(`h1`).parent()

            // h1 태그 내부에 있는 i 태그를 선택합니다.
            $(`h1`).find(`i`)
            ```
    4. 문서 객체 개별 조작
        |속성|설명|
        |-|-|
        |legnth|선택된 문서 객체의 수를 구합니다.|

        |메소드|설명|
        |-|-|
        |get()|선택한 문서 객체 중 하나를 선택합니다.|
        + each() 메소드
            |메소드|설명|
            |-|-|
            |each()|선택한 문서 객체에 반복을 적용합니다.|
            <br>
            <b>주의점</b> : ECMAScript5에서 제공하는 Array 객체의forEach () 메소드와 인덱스,요소 순서가 다름
            <br>
            |Array 객체의 forEach() 메소드|jQuery의 each() 메소드|
            |-|-|
            |[].forEach(function (item , index){<br><br>});|$(`h1`).each(function (index, item){<br><br>});|
    5. 문서 객체 조작
        + 문자 조작 메소드
           |메소드|설명|
           |-|-|
           |text()|html 태그 내부의 문자를 조작합니다.|
           |html()|html태그 내부의 문자를 조작합니다(HTML 태그 인식).| 

           ```
           // h1 태그 내부의 문자를 가져옵니다.
           $(`h1`).text()

           // h1 태그 내부의 문자를 가져옵니다.
           $(`h1`).html()
           ```
           + 선택자로 여러 개의 문서 객체를 선택할 때 text() 메소드는 모든 문서 객체 내부의 문자를 출력,html()메소드는 첫 번째 문서     객체 내부의 문자를 출력
        + 문서 객체 내부의 문자를 변경
            ```
            // h1 태그 내부의 문자를 설정합니다.
            $(`h1`).text('안녕하세요')

            // h1 태그 내부의 문자를 설정합니다.
            $(`h1`).html('안녕하세요')
            ```
        + 스타일 조작
            + CSS()
                |메소드|설명|
                |-|-|
                |CSS()|스타일을 조작합니다.|

                ```
                // h1 태그의 color 스타일 속성을 가져옵니다.
                $(`h1`).css('color')

                // h1 태그의 color 스타일 속성을 red로 설정합니다.
                $(`h1`).css('color','red')

                // h1 태그의 color 스타일 속성과 backgroundColor 스타일 속성을 한꺼번에 설정합니다.
                $(`h1`).css({
                    Color: 'red',
                    backgroundColor: 'orange'
                })
                ```
        + 속성조작
            + attr()
                |메소드|설명|
                |-|-|
                |attr()|속성을 조작합니다.|
                    ```
                    // img 태그의 src 속성을 가져옵니다.
                    $(`img`).attr('src')

                    // img 태그의 src 속성을 http://placehold.it/100x100으로 설정합니다.
                    $(`img`).css('src','http://placehold.it/100x100')

                    // img 태그의 src 속성과 alt 속성을 한꺼번에 지정합니다.
                    $(`img`).css({
                        src:'http://placehold.it/100x100',
                        alt: 'placeohold.it'
                    })
                    ```
    6. 문서 객체 생성
        + $() 함수의 매개 변수에 HTML 형식의 문자열을 입력
            ```
            $('<h1></h1>`)
            ```
            ```
            $('<h1></h1>`)
                .text('안녕하세요)
                .attr('data-test','test')
                .css({
                    backgroundColor: 'red'
                    color: 'white'
                });
            ```

            |메소드|설명|
            |-|-|
            |$(<A>).prependTo(<B>)|A를 B 안쪽 앞에 추가합니다.|
            |$(<A>).appendTo(<B>)|A를 B 안쪽 뒤에 추가합니다.|
            |$(<A>).insertBefore(<B>)|A를 B 앞에 추가합니다.|
            |$(<A>).insertAfter(<B>)|A를 B 뒤에 추가합니다.|
    7. 이벤트
        |메소드|설명|
        |-|-|
        |on()|이벤트를 연결합니다.|
        |off()|이벤트를 제거합니다.|
        + 이벤트 직접 연결
            + 특정 태그에 이벤트를 연결하고,특정 태그를 눌렀을 때 이벤트가 발생
            + jQuery로 이벤트를 직접 연결할 때는 on() 메소드 사용
            + 기본형태
                ```
                $(<선택자>).on(<이벤트 이름>, <콜백 함수>)
                ```
            + 키보드 이벤트
                |메소드|설명|
                |-|-|
                |keydown()|키보드 키를 눌렀을 때|
                |keypress()|키가 입력되었을 때|
                |keyup()|키보드 키를 떼었을 때|
            + 마우스 이벤트
                |메소드|설명|
                |-|-|
                |click()|마우스를 클릭했을 때|
                |dbclick()|마우스를 더블 클릭했을 때|
                |mousedown()|마우스 버튼을 눌렀을 때|
                |mouseenter()|마우스 커서가 해당 태그로 들어갔을 때|
                |mouseleave()|마우스 커서가 해당 태그에서 나갔을 때|
                |mousemove()|마우스가 움직일 때|
                |mouseup()|마우스 버튼을 뗄 때|
            + 입력 양식 이벤트
                |메소드|설명|
                |-|-|
                |blur()|입력 양식에 값 입력을 종료할 때|
                |change()|입력 양식의 값이 변경될 때|
                |focus()|입력 양식에 값 입력을 시작할 때|
                |select()|type 속성이 select인 입력 양식의 목록에서 값을 선택했을 때|
                |submit()|tpye 속성이 submit인 입력 양식을 클릭했을 때|
            + 웹 브라우저 이벤트
                |메소드|설명|
                |-|-|
                |resize()|웹 브라우저의 크기를 변경할 때|
                |scroll()|웹 브라우저를 스크롤할 때|
        + 이벤트 간접 연결
            + 부메에게 이벤트를 위임해서 부모가 이벤트를 처리하게 하는 것
        + 이벤트 제거
            + off() 메소드 사용
                ```
                // h1 태그의 모든 이벤트를 제거합니다.
                $(`h1`).off();

                // h1 태그의 click 이벤트를 모두 제거합니다.
                $(`h1`).off('click');

                // h1 태그의 click 이벤트로 연결한 콜백 함수 중 특정한 콜백 함수만 제거합니다.
                $(`h1`).off('click',handler);
                ```

                |메소드|설명|
                |-|-|
                |one()|이벤트를 한 번만 연결합니다.|
    8. 애니메이션
        + animate()
            |메소드|설명|
            |-|-|
            |animate()|애니메이션을 적용합니다.|
            + 스타일에 적용
            + 숫자를 적용할 수 있는 모든 속성에 animate() 메소드 사용 가능
            + 콜백 함수는 애니메이션이 종료되었을 때 호출,생략 가능함
                ```
                $(<선택자>).animate(<속성>,<시간>,<콜백 함수>)
                ```

## [05월25일]
 > + express 모듈
 > + RESTful 웹 서비스
### 여러줄 요약
1. 요청과 응답
    + 요청하는 대상 : 클라이언트(사용자)
    + 응답하는 대상 : 서버(제공자)
    + 요청 메시지 : 클라이언트가 서버로 보내는 편지.
    + 응답 메시지 : 서버가 클라이언트로 보내는 편지.
2. express 모듈을 사용한 서버 생성과 실행
    + express 모듈 설치
        ```
        $ npm install express@4
        ```
    + express 모듈의 기본 메소드
        메소드|설명|
        |:----|:----|
        express()|서버 애플리케이션 객체를 생성합니다.|
        app.use()|요청이 왔을 때 실행할 함수를 지정합니다.|
        app.listen()|서버를 실행합니다.|
3. 페이지 라우팅
    + 페이지 라우팅 : 클라이언트 요청에 적절한 페이지를 제공하는 기술
    + express 모듈의 페이지 라우팅 메소드
        메소드|설명|
        |:----|:----|
        get(path, callback)|GET 요청이 발생했을 때 이벤트 리스너를 지정합니다.|
        post(path, callback)|POST 요청이 발생했을 때 이벤트 리스너를 지정합니다.|
        put(path, callback)|PUT 요청이 발생했을 때 이벤트 리스너를 지정합니다.|
        delete(path, callback)|DELETE 요청이 발생했을 때 이벤트 리스너를 지정합니다.|
        all(path, callback)|모든 요청이 발생했을 때 이벤트 리스너를 지정합니다.|
    + 페이지 라우팅을 할 때 토큰을 활용함
        + ':<토큰 이름>'형태로 설정
        + 토큰은 다른 문자열로 변환 입력가능,request 객체의 parmas 속성으로 전달됨
4. 요청과 응답
    + response 객체
        + response 객체의 기본 메소드
            메소드|설명|
            |:----|:----|
            send()|데이터 본문을 제공합니다.|
            status()|상태 코드를 제공합니다.|
            set()|헤더를 설정합니다.|
        + 데이터 제공
            + send() 메소드 : 사용자에게 데이터 본문을 제공
            + send() 메소드는 가장 마지막에 실행해야 하며,두 번 실행할 수 없음
    + Content-Type
        + 서버가 Content-Type을 제공 : 웹 브라우저는 헤더를 확인, 제공된 데이터의 형태를 확인(MIME라는 문자열로 제공)
            MIME 형식|설명|
            |:----|:----|
            text/plain|기본적인 텍스트를 의미합니다.|
            text/html|html 데이터를 의미합니다.|
            image/png|png 데이터를 의미합니다.|
            audio/mpe|MP3 음악 파일을 의미합니다.|
            video/mpeg|MPEG 비디오 파일을 의미합니다.|
            application/json|json 데이터를 의미합니다.|
            multipart/form-data|입력 양식 데이터를 의미합니다.|
        + MIME 형식을 지정 : type () 메소드 사용
            메소드|설명|
            |:----|:----|
            type()|Content-Type을 MIME 형식으로 지정합니다.
        + HTTP 상태 코드 :404 Not Found
            + 상태 코드 : 서버가 클라이언트에 '해당 경로는 이러한 상태'라고 알려 주는 용도
                HTTP 상태코드|설명|예|
                |:----|:----|:----|
                1XX|처리중|100 Continue|
                2XX|성공|200 OK|
                3XX|리다이렉트|300 Multiple Choices
                4XX|클라이언트 오류|400 Bad Request
                5XX|서버 오류|500 Internal Server Error
            + 상태 코드를 지정 :status () 메소드 사용
                메소드|설명|
                |:----|:----|
                status()|상태 코드를 지정합니다.|
        + 리다이렉트 : 3XX, 특수한 상태 코드
            + 웹 브라우저가 리다이렉트를 확인하면 화면을 출력하지 않고,응답 헤더에 있는<br>
            Location 속성을 확인해서 해당 위치로 이동
            + 특정 경로로 웹 브라우저를 인도 할 때 사용
                메소드|설명|
                |:----|:----|
                redirect()|리다이렉트합니다.|
    + request 객체
        + 요청 매개 변수
            + 네이버에서'초콜릿' 문자를 검색 <br>
            <https://search.naver.com/search.naver?where=nexearch&query=초콜릿&sm=top_hty&fbm=0&ie=utf8>
                |분류|값|설명|
                |:---------------|:-------------------------------------------------------|:-----------------------------------------------------------|
                |프로토콜|HTTPS|통신에 사용되는 규칙을 의미합니다.|
                |호스트|(search).naver.com|애플리케이션 서버(또는 분산 장치 등)의 위치를 의미합니다.|
                |URL|search.naver|애플리케이션 서버 내부에서 라우트 위치를 나타냅니다.|
                |요청 매개 변수|?where=nexearch<br>&query=초콜릿<br>&sm=top_hty<br>&fbm=0<br>&ie=utf8|추가적인 정보를 의미합니다.|
5. 미들웨어
    + 미들웨어 설정 메소드
        |메소드|설명|
        |:----|:-----|
        |use()|미들웨어를 설정합니다.|
    + 정적 파일 제공
        + 웹 페이지에서 변경되지 않는 요소(이미지, 음악, 자바스크립트 파일,스타일시트 파일 등)를 쉽게 제공
    + morgan 미들웨어
        + express 모듈의 미들웨어로 사용할 수 있는 외부 모듈을 확인
            + express middleware<br>
            &nbsp;<https://expressjs.com/en/resources/middleware.html>
            + morgan 미들웨어 :로그 출력 미들웨어
             - <https://github.com/expressjs/morgan>
             - 설치
                ```
                > npm install morgan
                ```
                + 로그 :관련된 정보를 가진 글자
                + 로그 출력 미들웨어 :웹 요청과 관련된 내용을 출력하는 미들웨어
    + body-parser 미들웨어
        + 요청 본문을 분석함
        + 클라이언트에서 서버로 데이터 전송
            + URL을 사용한 요청
             − ‘http://localhost:52273/books/:id’ 형태로 라우트하면 :id 부분을 변경 해서 데이터를 전달
             − URL에 요청 매개 변수를 입력하면, 추가적인 정보를 객체 형태로 전달
             − URL을 사용한 요청은 주소에 정보가 남는다는 단점이 있음, 쉽게 추적당해 문제가 발생함
             − 요청 본문 사용 : 주소에 기록을 남기지 않고 데이터를 전달 가능함
        + 요청 본문
            + 클라이언트가 서버로 본문을 전달할 때 요청 본문의 종류를 함께 전달
            + MIME 형식
                |MIME 형식|설명|
                |:----|:-----|
                |application/x-www/form/urlencoded|웹 브라우저에서 입력 양식을 POST,PUT,DELETE방식 등으로 전달<br>할 때 사용하는 기본적인 요청 형식입니다.|
                |application/json|JSON 데이터로 요청하는 방식입니다.|
                |mutipart/form-data|대용량 파일을 전송할 때 사용하는 요청 방식입니다.|
            + 클라이언트가 어떤 Encoding-Type으로 요청했는지 확인,변환해서 읽음(복잡) <br>
            &nbsp; -> body-parser 미들웨어 : 쉽게처리
            + body-parser 미들웨어
                + <https://github.com/expressjs/body-parser>
                + 설치
                    ```
                    > npm install body-parser
                    ```
            + 속성 정리 :클라이언트가 서버로 데이터를 전송하는 세 가지 방법
                + params 객체 : URL의 토큰. 보기가 간편
                + query 객체 : URL의 요청 매개 변수. 토큰보다 많은 데이터를 전달할 수 있으며,주소로 어떤 데이터가 오고 가는지 확인가능
                + body 객체 : 대용량 문자열 등을 전송할 때 사용. 주소에 데이터를 기록하지 못하므로 새로고침이나 즐겨찾기 기능 등을 활용할 수 없음
6. RESTdul 웹 서비스 개요
    + REST 규정에 맞게 만든 ROA를 따르는 웹 서비스 디자인 표준
        |메소드|컬렉션(배열)|요소|
        |-|-|-|
        |  |/collection|/collection/id|
        |GET|컬렉션을 조회합니다.|컬렉션의 특정 요소를 조회합니다.|
        |POST|컬렉션에 새로운 데이터를 추가합니다.|사용하지 않습니다.|
        |PUT|컬렉션 전체를 한꺼번에 변경합니다.|컬렉션에 특정 요소를 수정합니다.|
        |DELETE|컬렉션 전체를 삭제합니다.|컬렉션의 특정 요소를 삭제합니다.|
        
        예) 사용자 관련 정보
        \- GET /user : 사용자 전체를 조회<br>
        \- GET /user/273 : 273번 사용자를 조회<br>
        \- POST /user : 사용자를 추가<br>
        \- DELETE /user/273 : 273번 사용자를 삭제
    + RESTful 웹 서비스
        |메소드|경로|설명|
        |-|-|-|
        GET|/user|모든 사용자 정보를 조회합니다.|
        POST|/user|사용자를 추가합니다.|
        GET|/user/:id|특정 사용자 정보를 조회합니다.|
        PUT|/user/:id|특정 사용자 정보를 수정합니다.|
        DELETE|/user/:id|특정 사용자 정보를 제거합니다.|
## [05월18일]
 > + Node.js 기본

### 여러줄 요약
1. 전역변수
    + 전역 변수,전역 함수, 전역 객체 : 모든 곳에서 사용할 수 있는 것들
        변수|설명|
        |:----|:----|
        __filename|현재 실행 중인 코드의 파일 경로를 나타냅니다.|
        __dirname|현재 실행 중인 코드의 폴더 경로를 나타냅니다.|
2. process 객체의 속성과 이벤트
    + Node.js는 process 전역 객체를 제공
    + process 객체는 프로세스 정보를 제공하며,제어할 수 있게 하는 객체
        + process 객체의 속성
            속성|설명|
            |:----|:----|
            env|컴퓨터 환경 정보를 나타냅니다.|
            version|Node.js 버전을 나타냅니다.|
            versions|Node.js와 종속된 프로그램 버전을 나타냅니다.   |
            arch|프로세서의 아키텍처를 나타냅니다.|
            platform|플랫폼을 나타냅니다.|
        + process 객체의 메소드
            메소드|설명|
            |:----|:----|
            exit([exitCode=0])|프로그램을 종료합니다.|
            memoryUsage()|메소리 사용 정보 객체를 리턴합니다.|
            uptime()|현재 프로그램이 실행된 시간을 리턴합니다.|
3. process 객체와 이벤트 개요
    + Node.js의 이벤트 연결 메소드
        메소드|설명|
        |:----|:----|
        on(<이벤트 이름>,<이벤트 핸들러>)|이벤트를 연결합니다.|
        + Node.js가 제공하는 객체의 이벤트 : <https://nodejs.org/en/docs/>
    + process 객체의 이벤트
        이벤트|설명|
        |:----|:----|
        exit|프로세스가 종료될 때 발생합니다.|
        uncaughtException|예외가 일어날 때 발생합니다.|
        + process 객체 : <https://nodejs.org/dist/latest-v6.x/docs/api/process.html>
4. os 모듈
    + os 모듈 사용
        ```
        const os = require('os');
        ```
    + os 모듈의 메소드
        메소드|설명|
        |:----|:----|
        hostname()|운영체제의 호스트이름을 리턴합니다.|
        type()|운영체제의 이름을 리턴합니다.|
        platform()|운영체제의 플랫폼을 리턴합니다.|
        arch()|운영체제의 아키텍처를 리턴합니다.|
        release()|운영체제의 버전을 리턴합니다.|
        uptime()|운영체제가 실행된 시간을 리턴합니다|
        loadavg()|로드 에버러지 정보를 담은 배열을 리턴합니다.|
        totalmem()|시스템의 총메모리를 리턴합니다.|
        freemem()|시스템의 사용 가능한 메모리를 리턴합니다.|
        cpus()|CPU의 정보를 담은 객체를 리턴합니다.|
        getNetworkInterfaces()|네트워크 인터페이스의 정보를 담은 배열을리턴합니다.|
5. url 모듈
    + url 모듈 사용
        ```
        const url = require('url');
        ```
    + url 모듈의 메소드
        메소드|설명|
        |:----|:----|
        parse(urlStr[, parseQueryString=false,slashesDenoteHost=false])|URL 문자열을 URL 객체로 변환해 리턴합니다.|
        format(urlObj)|URL 객체를 URL 문자열로 변환해 리턴합니다.|
        resolve(from,to)|매개 변수를 조합하여 완전한 URL 문자열을 생성해 리턴합니다.|
6. File System 모듈
    + fs 모듈 사용
        ```
        const fs = require('fs');
        ```
    + 파일 읽기 메소드
        메소드|설명|
        |:----|:----|
        fs.readFileSync(<파일 이름>)|동기적으로 파일을 읽어 들입니다.|
        fs.readFile(<파일 이름>,<콜백 함수>)|비동기적으로 파일을 읽어 들입니다.|
    + 동기식 코드
        ```
        // 모듈을 추출합니다.
        const fs = require('fs'); ①

        // 파일을 읽어 들이고 출력합니다.
        const file = fs.readFileSync('textfile.txt'); ②
        console.log(file); ③
        console.log(file.toString()); ④
        // 현재 단계의 코드를 종료합니다. ⑤
        ```
        + 파일의 크기가 굉장히 크다면 ②에서 ③으로 이동할 때 코드가 정지할 가능성이 있음
        + 문제를 해결을 위해 쓰레드 기능을 사용해야 함
        + Node.js에는 쓰레드의 기본 이념이 들어 있음
    + 비동기식 코드
        ```
        //모듈을 추출합니다.
        ① const fs = require('fs'); 

        // 파일을 읽어 들입니다.
        ② fs.readFile('textfile.txt',(error,file) => { 
            // 출력합니다.
            ④ console.log(file); 
            ⑤ console.log(file.toString()); 
            ⑥ // 현재 단계의 코드를 종료합니다. 
        });
        ③ // 현재 단계의 코드를 종료합니다. 
        ```
        + ②에서 ③으로 이동하는 시간이 0초에 가까움
        + 즉, 코드는 진행하고 Node.js의 뒷단에서 파일을 읽어 들이는 처리가 수행됨
        + 이러한 뒷단에서 처리가 모두 끝나면, 그때 콜백 함수 부분을 실행함
        + 콜백 함수의 첫 번째 매개 변수는 오류객체이고 두 번째 매개 변수가 원하는 값임
    + 비동기 처리의 장점
        + 웹 서버를 C++ 프로그래밍 언어로 만들면 무척 빠르지만, 개발과 유지 보수는 어려움
        + 전 세계 웹 서비스 기업(페이스북, 트위터 등)도 C++로 웹 서버를 개발하지 않고 PHP, 자바, 루비, 파이썬, Node.js 등 프로그래밍 언어로 개발
        + 프로그래밍 언어 자체는 느리지만 큰 의미가 없다고 판단해 개발 속도와 유지 보수성이 좋은 프로그래밍 언어를 사용
        + 자바스크립트 프로그래밍 언어는 C++, 자바보다 느리지만 Node.js를 사용하면 손쉽게 비동기 처리를 구현하여 빠른 처리가 가능
    + 파일 쓰기 메소드
        메소드|설명|
        |:----|:----|
        fs.writeFileSync(<파일 이름>,<문자열>)|동기적으로 파일을 씁니다.|
        fs.writeFile(<파일 이름>,<문자열>,<콜백함수>)|비동기적으로 파일을 씁니다.|
    + 파일 처리와 예외 처리
         + 동기 코드 예외처리 : try catch 구문
         + 비동기 코드 예외처리 : 콜백함수의 첫 번째 매개 변수 error를 활용
7. 노드 패키지 매니저
    + 과거의 프로그래밍 언어들은 외부 모듈 설치가 어려웠음
    + 현재는 ‘패키지 매니저’ 모듈 관리 프로그램을 사용해 모듈을 쉽게 설치하고 활용 가능함
    + Node.js는 npm(Node.js Package Manager) 패키지 매니저를 사용
    + npm을 이용한 외부 모듈 설치
        ```
        > npm install <모듈 이름>
        예> npm install express
        ```
    + 명령어 뒤에 @ 기호를 사용하면 원하는 버전을 설치
        ```
        > npm install <모듈 이름>@<버전>
        예> npm install express@4
        예> npm install express@4.2
        예> npm install express@4.2.7
        ```
8. request 모듈
    + 웹 요청을 쉽게 만들어 주는 모듈로 외부 모듈임
    + 설치
        ```
        > npm install request
        ```
    + request 모듈 추출
        ```
        // 모듈을 추출합니다.
        const request = require('request');
        ```
9. cheerio 모듈
    + request 모듈로 가져온 웹 페이지는 단순한 HTML 문자열임<br>
    &nbsp;여기에서 원하는 정보를 추출해야 단순한 ‘데이터’가 ‘정보’가 됨 -> 파싱
    + cheerio 모듈 : 가져온 웹 페이지의 특정 위치에서 손쉽게 데이터를 추출
    + cheerio 모듈 설치
        ```
        > npm install cheerio
        ```
    + cheerio 모듈 추출
        ```
        // 모듈을 추출합니다.
        const cheerio = require('cheerio');
        ```
10. async 모듈
    + 비동기적으로 구성되므로 실행 순서를 정의하기가 어렵고, 들여쓰기도 많다. 이 문제를 어느 정도 해결해 줄 수 있는 모듈
    + async 모듈 설치
        ```
        > npm install async
        ```
    + async 모듈 추출
        ```
        const async = require('async');
        ``` 
## [05월11일]
 > + 표준 내장 객체
 > + 예외 처리
### 여러줄 요약
1. 표준 내장 객체
    + Date 객체
        + 생성 방법
            생성자 함수|설명|
            |:----|:----|
            new Date()|현재 시간으로 Date 객체를 생성합니다.|
            new Date(유닉스 타임)|유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경화한 밀리초)으로 Date 객체를 생성합니다.|
            new Date(시간 문자열)|문자열로 Date 객체를 생성합니다.|
            new Date(<년>,<월-1>,<일>,시간>,<분>,<초>,<밀리초>)|시간요소(년,월-1,일,시간,분,초,밀리초)를 기반으로 Date 객체를 생성합니다.|
        + 예제
            + 시간더하기
                ```
                let foo = new Date();
                console.log(foo);

                foo.setFullYear(foo.getFullYear()+1);
                foo.setMonth(foo.getMonth()+1);
                foo.setDate(foo.getDate()+1);

                console.log(foo);
                ```
            + 결과값
            
            ![1](https://user-images.githubusercontent.com/79895970/117764618-c451c180-b267-11eb-9d97-adf82855732d.PNG)

            + 시간 간격 구하기
                ```
                let now = new Date();
                let before = new Date('Dec 9,2020');

                let interval = now.getTime() - before.getTime();
                interval = Math.floor(interval / (1000*60*60*24));

                console.log(`태어나고 ${interval}일 지났습니다.`);
                ```
            + 결과값
            
            ![2](https://user-images.githubusercontent.com/79895970/117765016-4fcb5280-b268-11eb-8576-851302af8272.PNG)
    + Array 객체
        + 기본 메소드는 이전 배열 설명 사이의 [메소드]( #Array-객체의-메소드)부분에 기입해 두엇습니다.
        + Array 객체의 배열선언
            ```
            let foo= [
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
            ```
        + ECMAScript5에서 추가된 Array 객체의 메소드
            메소드|설명|
            |:----|:----|
            for each()|배열의 요소를 하나씩 뽑아 반복을 돌립니다|
            map()|콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듭니다.|
            filter()|콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴합니다.|
            + 예제
                ```
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
                ```
            + 결과값
            
            ![3](https://user-images.githubusercontent.com/79895970/117768834-e5b5ac00-b26d-11eb-960e-c2e227cdb14e.PNG)
2. 예외 처리
    + TypeError 기본 예외 처리
        + 예외 상황 확인:undefined 자료형을 일반적인 객체 또는 함수처럼 다루면 TypeError 예외가 발생
    + try catch finally 구문
        + 기본형
            ```
            try{
                // 예외가 발생되면
            } catch(){
                // 여기서 실행됩니다.
            } finally{
                // 이 구문은 무조건 실행됩니다
            }
            ```
    + 예외 객체
        + 예외가 발생하면 어떤 예외가 발생했는지 정보를 전달함
        + catch 구문의 괄호 안의 변수
        + name 속성과 message 속성이 있음
        + 기본형
            ```
            try{

            } catch (exception){

            }
            ```
    + 예외 강제 발생
        + throw 키워드 사용
        + throw 키워드 뒤에는 문자열 또는 Error 객체를 입력
        + 기본형
            ```
            throw error
            ```
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
    + 기본 자료형과 객체 자료형의 차이
        + 예제
        ```
        let foo = false;
        let bar = 123;

        console.log(typeof foo);
        console.log(typeof bar);
        ```
        + 결과값
        
        ![1](https://user-images.githubusercontent.com/79895970/117259482-0b673d80-ae89-11eb-97b3-8759020297d2.PNG)
        
        typeof연산자로 foo와 bar의 데이터타입을 표시하였다.

        ```
        let foo = new Boolean(false);
        let bar = new Number(123);

        console.log(typeof foo);
        console.log(typeof bar);
        ```
        + 결과값
        
        ![2](https://user-images.githubusercontent.com/79895970/117260773-60f01a00-ae8a-11eb-8652-850b404f40eb.PNG)
        
        new 키워드를 사용하면 object타입으로 표시된다.

        ```
        let foo = 273;

        //메소드 추가
        foo.method = function() {
            return "hello";
        }

        console.log(foo.method());
        ```
        + 결과값
        
        ![3](https://user-images.githubusercontent.com/79895970/117261394-0d320080-ae8b-11eb-92e9-b792f86fe045.PNG)
        
        기본 자료형은 객체가 아니므로 속성과 메소드 추가가 불가능하다.<br><br>
        만약 hello를 출력하고싶으면 프로토타입을 사용하여 출력할수있다
        ```
        let foo = 273;
        let bar = 512;
        //메소드 추가
        Number.prototype.method = function() {
            return "hello";
        }

        console.log(foo.method());
        console.log(bar.method()); 
        ```
        + 결과값
        
        ![4](https://user-images.githubusercontent.com/79895970/117262144-e9bb8580-ae8b-11eb-8e24-30749f370fb8.PNG)
        
    + Number 객체
        + 자바스크립트에서 숫자를 표현할 때 사용
        + Number 객체 생성
        ```
        let numberFromLiteral = 273;
        let numberFromConstructor = new Number(273);
        ```
        + Number 객체의 메소드
            메소드|설명|
            |:----|:----|
            toExponential()|숫자를 지수 표시로 나타낸 문자열을 리턴합니다.|
            toFixed()|숫자를 고정소수점 표시로 나타낸 문자열을 리턴합니다.|
            toPrecision()|숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴합니다.|
            + toFixed() 메소드를 사용해 소수점 자릿수를 자르는 방법
            ```
            let foo = 25.123;

            console.log(foo.toFixed(1));
            ```
            + 결과값
            
            ![5](https://user-images.githubusercontent.com/79895970/117263558-5b480380-ae8d-11eb-8afe-75aa37b83ec1.PNG)
            
            소수점 첫째자리까지 표시되는 모습.
        + 생성자 함수의 속성
            + 생성자 함수에 속성과 메소드 추가
                ```
                function Constructor(){ }
                Constructor.foo = 273;
                Constructor.bar = function () {};

                console.log(Constructor.foo);
                console.log(Constructor.bar);
                ```
                + 결과값
                
                ![6](https://user-images.githubusercontent.com/79895970/117265454-381e5380-ae8f-11eb-88cc-f0b09c16077c.PNG)
                
            + Number 생성자 함수의 속성
                속성|설명|
                |:----|:----|
                MAX_VALUE|자바스크립트의 숫자가 나타낼 수 있는 최대 숫자|
                MIN_VALUE|자바스크립트의 숫자가 나타낼 수 있는 최소 숫자|
                NaN|자바스크립트의 숫자가 나타낼 수 없는 숫자|
                POSITIVE_INFINITY|양의 무한대 숫자|
                NEGATIVE_INFINITY|음의 무한대 숫자|
                + 예제
                ```
                let foo = Number.MAX_VALUE;
                let bar = Number.MAX_VALUE+1;
                
                console.log(foo);
                console.log(bar);
                ```
                + 결과값
                
                ![7](https://user-images.githubusercontent.com/79895970/117266058-d0b4d380-ae8f-11eb-8098-517dab6ad7a9.PNG)
                
                최댓값에 +1이 추가되었지만 oveflow가 되지 않고 최댓값을 출력하는 모습
        + String 객체
            + String 객체 생성
            ```
            let stringFromLiteral = '안녕하세요';
            let stringFromConstructor = new String('안녕하세요');
            ```
            + 잘못된 String 객체의 메소드 사용
                ```
                let foo = "abcdefg";

                foo.toUpperCase();
                console.log(foo);
                ```
                + 결과값
                
                ![8](https://user-images.githubusercontent.com/79895970/117267460-3fdef780-ae91-11eb-8fce-0b811caf4f7a.PNG)
                
                자기 자신을 변경하지 않고 리턴하는 것뿐이므로 소문자 상태로 출력
            + 올바른 String 객체의 메소드 사용
                ```
                let foo = "abcdefg";

                let bar = foo.toUpperCase();
                console.log(bar);
                ```
                + 결과값
                
                ![9](https://user-images.githubusercontent.com/79895970/117267776-977d6300-ae91-11eb-87ef-3aa6ff72efcb.PNG)
                
            + indexOf() 메소드
                + 특정 문자열이 있는지 확인,위치를 리턴함
                + 문자열이 포함되어 있지 않을 때는 -1을 리턴
                + 예제
                    ```
                    let foo = "좋은 아침입니다.";

                    if (foo.indexOf('아침') >= 0 ){
                        console.log("좋은 아침이에요...!");
                    }
                    ```
                    + 결과값
                    
                    ![1](https://user-images.githubusercontent.com/79895970/117268891-bcbea100-ae92-11eb-981a-317ad1d4fcdf.PNG)
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
    + #### Array 객체의 메소드
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
