// 문15	반복문	while	참고탭 참고	prompt 함수를 이용하여 숫자 값을 하나 입력 받기	
// 				숫자가 100이 아니면 숫자를 화면에 (팝업말고) 출력	
// 		5		숫자가 100이면 while 반복문을 끝내도록 처리	


window.onload = function(){


let random = Math.floor(Math.random()*3)+1;
let result = "";

while(true){
    user = this.prompt("1.가위 2.바위 3.보");
    if (user==1 || user==2 || user==3)break;
}

var div = this.document.getElementById("img");
div.innerHTML = '<img src="'+random+'.jpg">';

if(user == random){
    result = "비겼어요."
}

if(result.length == 0){
    if(user == 1){
        result = (random==3) ? "이겼어요!":"졌어요ㅜㅜ";
    }else if(user == 2){
        result = (random==1) ? "이겼어요!":"졌어요ㅜㅜ";
    }else if(user == 3){
        result = (random==2) ? "이겼어요!":"졌어요ㅜㅜ";
    }
}

var p = document.querySelector("p");
p.innerHTML = result;

}
