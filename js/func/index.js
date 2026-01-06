function add(a,b){
    return a+b;
}

var div = document.getElementById("com_num");

let result = document.createElement("p");
result.textContent = add(3,4);

div.appendChild(result);   