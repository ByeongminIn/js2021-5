const rep1 = require(`repl`); /*require을 이용하여 rep1의 값을 const rep1에 대입*/

rep1.start({
    prompt: "숫자 입력> ",
    eval : (command,context,filename, callback) => { /*=>화살표 함수처리*/
        let number = Number(command);/*number 변수에 입력받은 command값을 숫자로 변환해 넣어줌*/
        if(isNaN(number)) {/*숫자형이지만 숫자가 아닌경우를 판단*/
            console.log("숫자가 아닙니다.");/*숫자가 아닌경우*/
        }
        else {
            console.log("숫자 입니다.");/*숫자인경우*/
        }
        callback();
    }
})