
window.onload = function(){
var orc = new Monster("오크",100,10);
var elf = new Hero("엘프",200,20,0);

orc.info_hp();
elf.info_hp();

dw("\n 전투 시작! \n\n");
//둘 중 하나가 죽을 때 까지
while(orc.hp > 0 && elf.hp > 0){
    elf.getRandomAttackValue(orc.attack, orc);
    orc.getRandomAttackValue(elf.attack, elf);
}
elf.end_ment(orc);


}