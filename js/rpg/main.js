
var orc = new Monster("오크",100,10);
var elf = new Hero("엘프",200,20);

orc.info();
br();br();
elf.info();

hr();
dw("전투시작");
hr();

//todo
elf.getRandomAttackValue(orc.attack, orc);
orc.getRandomAttackValue(elf.attack, elf);



