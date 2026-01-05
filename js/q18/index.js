// 문15	반복문	while	참고탭 참고	prompt 함수를 이용하여 숫자 값을 하나 입력 받기	
// 				숫자가 100이 아니면 숫자를 화면에 (팝업말고) 출력	
// 				숫자가 100이면 while 반복문을 끝내도록 처리	


window.onload = function(){


    let stars = "";
    
    for(let i=9; i>0; i--){
        let star_line = "";
        for(let j=0; j<10; j++){
            if (j<10-i){
                star_line += "*";
            }else{
                star_line += "-";
            };
        }
        stars += star_line+"<br>";
    }

    var div = document.getElementById("a");
    div.innerHTML = stars;
}
