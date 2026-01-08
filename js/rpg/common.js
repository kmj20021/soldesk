/*
    공통함수들을 모아놓음
*/
    function dw(str){  
        var outputArea = document.getElementById("output");
        outputArea.value += str;
    }
    function br(){
        var outputArea = document.getElementById("output");
        outputArea.value += "\n";
    }
    function hr(){
        var outputArea = document.getElementById("output");
        outputArea.value += "\n" + "=".repeat(50) + "\n\n";
    }