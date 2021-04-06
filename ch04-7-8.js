let output ="";
// 예제 4-7
/* for(let i=0;i<10;i++){
    for (let j=0;j<i+1;j++){
        output +="*";
    }
    output += "\n";
}
output+="\n"; */

// 예제 4-8
/* for(let i=0;i<10;i++){
    for(let k=10;k>i;k--){
        output += " ";
    }
    for(let j=0;j<i+1;j++){
        output += "*";
    }
    output += "\n";
}

output+="\n"; */

// 추가 예제 삼각형 만들기
/* for(let i=0;i<10;i++){
    for (let j =0;j<10-i;j++){
        output += " ";
    }
    for(let j=0;j<i+1;j++){
        output += "*";
    }
    for(let j=1;j<i+1;j++){
        output+="*";
    }
    output+="\n";
} */

// 추가 예제 마름모 만들기
for(let i=0;i<10;i++){
    for (let j =0;j<10-i;j++){
        output += " ";
    }
    for(let j=0;j<i+1;j++){
        output += "*";
    }
    for(let j=1;j<i+1;j++){
        output+="*";
    }
    output+="\n";
}
for(let i=0;i<10;i++){
    for (let j =10;j<10-i;j--){
        output += " ";
    }
    for(let j=10;j>i;j--){
        output += "*";
    }
    for(let j=9;j>i;j--){
        output+="*";
    }
    output+="\n";
}
console.log(output);