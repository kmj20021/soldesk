class Character {
    constructor (n, h, a) {
        this.name = n;
        this.hp = h;
        this.fullHp = h;
        this.attack = a;
    }

    info_hp = function(){
        dw("["+this.name+" ( hp | "+this.hp+"/"+this.fullHp+")]");
	}

    All_C_info = function(character){
        hr();
        this.info_hp();
        character.info_hp();
        br();
    }
    

    getRandomAttackValue = function (attack, character){
        attack = attack +1;
        var random = Math.floor(Math.random()*attack);

        dw(this.name+"가" + random + "만큼 공격했다.");
        character.hp -= random;
        this.All_C_info(character);
    }
}