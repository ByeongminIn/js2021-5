/*let input = 32;

switch ( input % 2) {
    case 0:
        console.log("짝수 입니다.");
        break ;
    case 1:
        console.log("홀수 입니다.");
        break;
}*/

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