var close = true;
function xxx(){    
    var popup = document.getElementById("popup");
    //popup.style.display = "none";

    if(close){
        popup.style.background = "pink";
        popup.style.width = "100px";
        popup.style.height = "100px";
        popup.style.fontSize = "1em";   //주의: font-size가 아니라 fontSize임 (변수명명제약때문일듯)
        popup.style.transitionProperty = "background, width, height, font-size"; // 주의: fontSize가 아니라 font-size임(원래 순수 css 속성명 나열)
        popup.style.transitionDuration = "1s";
        close = false;
    }else{
        popup.style.background = "blue";
        popup.style.width = "200px";
        popup.style.height = "250px";
        popup.style.fontSize = "2em";   //주의: font-size가 아니라 fontSize임 (변수명명제약때문일듯)
        popup.style.transitionProperty = "background, width, height, font-size"; // 주의: fontSize가 아니라 font-size임(원래 순수 css 속성명 나열)
        popup.style.transitionDuration = "1s";
        close = true;
    }

    
}
