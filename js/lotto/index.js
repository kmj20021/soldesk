window.onload = function(){

function new_num () {
    let arr_num = new Set();
    while(arr_num.size <6){
        arr_num.add(Math.floor(Math.random()*45)+1); 
    }
    return arr_num;
}

function countSameNum(arr1, arr2){
    return arr1.filter(num=>arr2.includes(num)).length;
}

//input으로 사용자가 몇개의 로또를 원하는지
var user_rand_num = Array.from(new_num());
var user_div = document.getElementById("user_num");
user_div.innerHTML = "<p> 내 번호 : "+user_rand_num+"</p>";

var com_rand_num = Array.from(new_num());
var com_div = document.getElementById("com_num");
com_div.innerHTML = "<p> 당첨 번호 : "+com_rand_num+"</p>";

var sameNumCount = countSameNum(com_rand_num,user_rand_num);
var notice = document.createElement("p");
if (sameNumCount == 6) {
    notice.textContent="1등 당첨입니다!";
}else if(sameNumCount == 5 && user_rand_num[5] != com_rand_num[5]){
    notice.textContent="2등 당첨입니다!";
}else if(sameNumCount == 5 && user_rand_num[5] == com_rand_num[5]){
    notice.textContent="3등 당첨입니다!";
}else if(sameNumCount == 4){
    notice.textContent="4등 당첨입니다!";
}else if(sameNumCount == 3){
    notice.textContent="5등 당첨입니다!";
}else{
    notice.textContent="꽝입니다!";
}

document.body.appendChild(notice);

}//onload



