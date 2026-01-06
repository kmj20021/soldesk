class Character {
    constructor (n, h, a) {
        this.name = n;
        this.hp = h;
        this.fullHp = h;
        this.attack = a;
    }

    info = function(){
    document.write("["+this.name+" ("+this.hp+"/"+this.fullHp+")]");
	}
    
    hpInfo = function(){
        document.write(this.name+"의 체력["+this.hp+"/"+this.fullHp+"]");
    }

    All_info = function(character){
        hr();
        this.info();
        br();
        character.info();
        br();
    }
    

    getRandomAttackValue = function (attack, character){
    attack = attack +1;
    var random = Math.floor(Math.random()*attack);

    dw(this.name+"가" + random + "만큼 공격했다. <br>");
    character.hp -= random;
    this.All_info(character);
    }
}