// 문15	반복문	while	참고탭 참고	prompt 함수를 이용하여 숫자 값을 하나 입력 받기	
// 				숫자가 100이 아니면 숫자를 화면에 (팝업말고) 출력	
// 				숫자가 100이면 while 반복문을 끝내도록 처리	

function br(){
    document.writeln("<br>");
}

window.onload = function(){


    let age = this.prompt("나이를 입력하세요");;
    let kind = this.prompt("품종을 입력하세요");
    let name = this.prompt("이름을 입력하세요");

    let info = "나이 : "+age+"\n품종 : "+kind+"\n이름 : "+name;
    this.alert(info);

    

}
