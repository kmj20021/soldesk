

random = Math.floor(Math.random()*100)+1;
document.writeln("고양이 "+random+"마리!");

for(let i=0; i<random; i++){
    let img = '<img src="cat.jpg" id="id_'+i+'">';
    document.write(img);
    document.write(i+1); 
}
