class Hero extends Character{
    constructor(n, h, a, e) {
        super(n,h,a);
        this.exp = e;
    }

    info_exp() {
        dw("[경험치 : ("+this.exp+"/300)]");
    }

    end_ment (character) {
    if(this.hp <0){
        dw(" 패배 ");
        dw("현재 hp : "+this.hp);
    }else{
        dw("전투 성공!");
        let get_exp = Math.floor(Math.random()*character.attack)+6;
        this.exp += get_exp;
        dw("[경험치 "+get_exp+"을/를 얻었다!] \n");
        this.info_exp();
        dw("현재 hp : "+this.hp+"]");
    }
    }
}

